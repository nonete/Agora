// Configuración de Ágora. Puedes editar este archivo directamente en GitHub.
window.AGORA_CONFIG = {
  // Dirección del servidor intermedio (Cloudflare Worker) que llama a ChatGPT.
  // Ejemplo: "https://agora-ia.tu-usuario.workers.dev"
  // Si se deja vacío, la web funciona en modo demostración.
  apiUrl: "",

  // Dilemas que ven los alumnos, en este orden.
  // Para añadir uno, copia un bloque { ... }, cámbialo y sepáralo con una coma.
  dilemas: [
    // --- Casos reales ---
    {
      tag: "Convivencia",
      titulo: "El alumno que se niega a trabajar",
      texto: "Durante la clase, un alumno no saca los libros ni ningún material. La profesora insiste en que lo saque, pero él responde una y otra vez que no y se niega a trabajar. ¿Cómo debería actuar la profesora?"
    },
    {
      tag: "Protección del menor",
      titulo: "El secreto de la alumna",
      texto: "Una alumna le cuenta a su profesor que no quiere volver a casa porque a menudo presencia discusiones entre sus padres, en ocasiones violentas, y le pide que no diga nada. ¿Debe el profesor guardar silencio para respetar la intimidad de la niña, o es su responsabilidad como docente actuar y pedir ayuda a orientadores u otros profesionales?"
    },
    {
      tag: "Inclusión",
      titulo: "Tiempo para todos",
      texto: "En una clase numerosa de Primaria hay un alumno con necesidades educativas especiales que necesita más atención, y la profesora no cuenta con apoyo suficiente. ¿Debe dedicarle más tiempo para garantizar la atención que necesita, aunque atienda menos al resto, o repartir su tiempo por igual, aunque él no reciba todo el apoyo que necesita?"
    },
    {
      tag: "Inclusión",
      titulo: "¿Por qué él sí puede?",
      texto: "Con alumnado con dislexia o hiperactividad, el profesorado aplica medidas recogidas por la ley y es más flexible con algunas normas, por ejemplo permitiendo que se levanten cuando lo necesitan. El resto de la clase no entiende por qué ciertos compañeros no tienen que cumplir las mismas reglas. ¿Cómo debería gestionar el docente esta situación?"
    },
    {
      tag: "Convivencia",
      titulo: "La niña que guardaba cosas",
      texto: "Una niña recién adoptada empieza a acumular objetos que encuentra en el suelo o en las mesas (lápices, rotuladores, post-its) y a esconder su almuerzo por miedo a pasar hambre, por la escasez que vivió antes de la adopción. Sus compañeros se quejan de que les faltan cosas. ¿Debe el profesor castigarla, obligándola a devolverlo todo y quizá dejándola sin recreo, o investigar con la familia el trasfondo y enseñarle poco a poco que ya tiene sus necesidades cubiertas?"
    },

    // --- Ejemplos (puedes borrarlos) ---
    { tag: "Evaluación", titulo: "¿Eliminar los deberes?", texto: "Un centro se plantea suprimir los deberes en casa para reducir desigualdades entre familias. Otros docentes creen que sin práctica autónoma el aprendizaje se resiente." },
    { tag: "Tecnología", titulo: "Móviles en el aula", texto: "¿Debe prohibirse el móvil en clase o aprovecharlo como herramienta de aprendizaje con normas claras?" },
    { tag: "Inclusión", titulo: "Grupos por nivel", texto: "Agrupar al alumnado por rendimiento puede facilitar la enseñanza, pero también puede etiquetar y reducir expectativas. ¿Agrupar o mezclar?" },
    { tag: "IA y ética", titulo: "IA en los trabajos de clase", texto: "Un alumno entrega un trabajo hecho en parte con IA y lo declara. ¿Se debe aceptar, penalizar o rediseñar la tarea?" },
    { tag: "Convivencia", titulo: "Sanción o mediación", texto: "Ante un conflicto grave entre dos alumnos, ¿es mejor aplicar la sanción del reglamento o abrir un proceso de mediación?" },
    { tag: "Evaluación", titulo: "Repetir curso", texto: "Un alumno no alcanza los objetivos. ¿Repetir curso le ayuda o es mejor promocionar con apoyos?" }
  ]
};
