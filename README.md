# Ágora · Dilemas educativos

Web donde el alumnado debate dilemas educativos con una IA (ChatGPT) que actúa como docente universitaria experta en desarrollo moral (Piaget, Kohlberg, Gilligan).

- Debates cortos (6 turnos por defecto) con intervenciones breves de la IA.
- El alumno debe citar al menos 3 autores; la web los cuenta.
- Al terminar: valoración final y descarga del debate en PDF.

**Web publicada:** https://nonete.github.io/Agora/

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La web completa (alumno y docente). Aquí están el prompt y la valoración por defecto. |
| `config.js` | Dirección del servidor de IA y lista de dilemas. Se puede editar desde GitHub. |
| `worker/worker.js` | Servidor intermedio para Cloudflare que guarda la clave de OpenAI y llama a ChatGPT. |

## Conectar ChatGPT (una sola vez)

GitHub Pages solo sirve páginas estáticas, así que la clave de OpenAI no puede ir en la web: cualquiera podría verla. Por eso se usa un pequeño servidor gratuito en Cloudflare.

1. Crea una clave en https://platform.openai.com/api-keys (el uso de la API se paga aparte de ChatGPT Plus; pon un límite de gasto en *Billing > Limits*).
2. Crea una cuenta gratuita en https://dash.cloudflare.com y ve a *Workers & Pages > Create > Create Worker*.
3. Ponle un nombre (por ejemplo `agora-ia`), pulsa *Deploy*, luego *Edit code*, pega el contenido de `worker/worker.js` y vuelve a pulsar *Deploy*.
4. En *Settings > Variables and Secrets* añade:
   - `OPENAI_API_KEY` (tipo *Secret*): tu clave.
   - `ALLOWED_ORIGIN`: `https://nonete.github.io`
   - `MODEL` (opcional): el modelo de OpenAI que quieras usar.
5. Copia la dirección del worker (algo como `https://agora-ia.tu-usuario.workers.dev`) y pégala en `apiUrl` dentro de `config.js`.

Mientras `apiUrl` esté vacío, la web funciona en modo demostración con respuestas de ejemplo.

## Cambiar el comportamiento de la IA

- Para probar cambios: pestaña **Docente** de la web (solo se guardan en tu navegador).
- Para que lo vean todos los alumnos: edita `DEF_PROMPT`, `DEF_EVAL` o los valores de `CFG_DEF` en `index.html`, o los dilemas en `config.js`.
