// Servidor intermedio de Ágora para Cloudflare Workers.
// Guarda la clave de OpenAI (nunca va en la web) y reenvía cada mensaje a ChatGPT.
//
// Variables que hay que configurar en Cloudflare (Settings > Variables):
//   OPENAI_API_KEY  (secreto)  tu clave de https://platform.openai.com/api-keys
//   ALLOWED_ORIGIN  (texto)    https://nonete.github.io
//   MODEL           (texto)    opcional, por defecto gpt-5.6-luna

const MAX_MENSAJES = 40;        // límite de mensajes por petición
const MAX_CARACTERES = 20000;   // límite de texto por petición

export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || "*";
    const cors = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    const json = (obj, status = 200) =>
      new Response(JSON.stringify(obj), { status, headers: { ...cors, "Content-Type": "application/json" } });

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") return json({ error: "Método no permitido" }, 405);

    const reqOrigin = request.headers.get("Origin");
    if (env.ALLOWED_ORIGIN && reqOrigin !== env.ALLOWED_ORIGIN) return json({ error: "Origen no permitido" }, 403);

    let body;
    try { body = await request.json(); } catch { return json({ error: "JSON no válido" }, 400); }
    const { system, mensajes } = body || {};
    if (typeof system !== "string" || !Array.isArray(mensajes) || !mensajes.length) return json({ error: "Faltan datos" }, 400);
    if (mensajes.length > MAX_MENSAJES) return json({ error: "Conversación demasiado larga" }, 400);

    const limpios = mensajes
      .filter(m => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map(m => ({ role: m.role, content: m.content }));
    const total = system.length + limpios.reduce((n, m) => n + m.content.length, 0);
    if (total > MAX_CARACTERES) return json({ error: "Texto demasiado largo" }, 400);

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + env.OPENAI_API_KEY },
      body: JSON.stringify({
        model: env.MODEL || "gpt-5.6-luna",
        messages: [{ role: "system", content: system }, ...limpios],
        max_completion_tokens: 800,
      }),
    });
    if (!r.ok) return json({ error: "Error de OpenAI", detalle: (await r.text()).slice(0, 300) }, 502);
    const data = await r.json();
    return json({ texto: data.choices?.[0]?.message?.content?.trim() || "" });
  },
};
