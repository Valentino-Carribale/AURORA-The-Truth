// Cada objeto contiene el contenido de una pantalla. Los eventos están en app.js.
// Las rutas vacías conservan los espacios de imágenes y animaciones sin contenido.
export const escenas = [
  {
    id: "inicio",
    titulo: "AURORA",
    ubicacion: "Canadá · Futuro cercano",
    etiqueta: "THE TRUTH",
    tema: "cyan",
    tipo: "inicio",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "¿Hasta dónde llegarías para descubrir la verdad?",
      "Una aventura narrativa de ciencia ficción, misterio y decisiones.",
    ],
    pregunta: "",
    opciones: [
      { id: "comenzar", texto: "Comenzar" },
      { id: "creditos", texto: "Créditos" },
    ]
  },
  {
    id: "introduccion",
    titulo: "La historia de Annie",
    ubicacion: "Canadá / Hogar de Annie",
    etiqueta: "INTRODUCCIÓN",
    tema: "cyan",
    tipo: "narrativa",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Vivís en Canadá y te apasiona la biotecnología. Tuviste que dejar los estudios después de la muerte de tu papá para cuidar a tu mamá enferma.",
      "Necesitás conseguir trabajo para ayudarla. Encontraste dos empresas que podrían darte una oportunidad: NovaSphere y NorthBio.",
      "En tu teléfono aparece un mensaje de tu mamá: «¿Cómo fue la búsqueda? No te preocupes por mí». Mirás la foto de tu papá y contestás: «Voy a conseguir algo, mamá».",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "postulacion",
    titulo: "Elegir empresa",
    ubicacion: "Canadá / Búsqueda laboral",
    etiqueta: "TU DECISIÓN",
    tema: "violeta",
    tipo: "decision",
    imagen: "./assets/img/01_elegir_postulacion.png",
    personaje: "",
    animacion: "",
    textos: [
      "NovaSphere trabaja en biotecnología. NorthBio se dedica a las neurociencias y la inteligencia artificial.",
    ],
    pregunta: "¿Dónde querés postularte?",
    opciones: [
      { id: "novasphere", texto: "NovaSphere" },
      { id: "northbio", texto: "NorthBio" },
    ]
  },
  {
    id: "primerDia",
    titulo: "Primer día en NovaSphere",
    ubicacion: "NovaSphere / Laboratorio",
    etiqueta: "LA HISTORIA",
    tema: "cyan",
    tipo: "narrativa",
    imagen: "./assets/img/02_novasphere.png",
    personaje: "",
    animacion: "",
    textos: [
      "Una supervisora te recibe en el laboratorio. «Los registros son confidenciales. Limitate a las tareas asignadas».",
      "Frente a tu escritorio, un procedimiento figura como verificado en la computadora. En el documento físico todavía está marcado como pendiente.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "anomalias",
    titulo: "NovaSphere: anomalías",
    ubicacion: "NovaSphere / Procedimientos",
    etiqueta: "TU DECISIÓN",
    tema: "cyan",
    tipo: "decision",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "En tu primer día, una supervisora te pide que limpies los registros del laboratorio y te recuerda que son confidenciales.",
      "Notás que algunos procedimientos aparecen como verificados en la computadora, pero los documentos indican que todavía están pendientes.",
    ],
    pregunta: "¿Qué hacés?",
    opciones: [
      { id: "investigar", texto: "Investigar las anomalías" },
      { id: "ignorar", texto: "Ignorar el asunto" },
    ]
  },
  {
    id: "registroAlterado",
    titulo: "Una fecha no borra lo ocurrido",
    ubicacion: "NovaSphere / Archivo digital",
    etiqueta: "LA HISTORIA",
    tema: "cyan",
    tipo: "narrativa",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Abrís los registros relacionados con la anomalía. Las fechas fueron cambiadas y la firma de autor desapareció.",
      "Una cámara se orienta hacia tu escritorio. «No se corrige un accidente cambiando la fecha», pensás.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "registros",
    titulo: "Registros alterados",
    ubicacion: "NovaSphere / Registros alterados",
    etiqueta: "TU DECISIÓN",
    tema: "cyan",
    tipo: "decision",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Al investigar, encontraste archivos con fechas modificadas y sin el nombre de quien hizo los cambios.",
    ],
    pregunta: "¿Qué hacés con las pruebas?",
    opciones: [
      { id: "guardar", texto: "Guardar copias de las pruebas" },
      { id: "borrar", texto: "Borrar las pruebas" },
    ]
  },
  {
    id: "limpieza",
    titulo: "La tarea continúa",
    ubicacion: "NovaSphere / Limpieza de registros",
    etiqueta: "LA HISTORIA",
    tema: "cyan",
    tipo: "narrativa",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Decidiste no investigar las anomalías y retomás la limpieza habitual de registros.",
      "Entre los documentos que tenés que ordenar aparece el informe de un accidente. No revisaste las discrepancias anteriores, pero este archivo todavía está a tu alcance.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "informeEncontrado",
    titulo: "Un nombre tachado",
    ubicacion: "NovaSphere / Archivo de incidentes",
    etiqueta: "LA HISTORIA",
    tema: "cyan",
    tipo: "narrativa",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Durante la limpieza encontrás un informe de accidente con un nombre cubierto. Debajo hay una sección de anexos ocultos.",
      "Recordás la preocupación de tu mamá por que puedas conservar el empleo. La pantalla espera tu siguiente movimiento.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "informe",
    titulo: "Informe de accidente",
    ubicacion: "NovaSphere / Informe de accidente",
    etiqueta: "TU DECISIÓN",
    tema: "cyan",
    tipo: "decision",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Mientras continuás limpiando los registros, encontrás el informe de un accidente ocurrido en las instalaciones.",
      "Hay un nombre tachado y varios archivos ocultos relacionados con el caso.",
    ],
    pregunta: "¿Qué decidís?",
    opciones: [
      { id: "revisar", texto: "Revisar los archivos ocultos" },
      { id: "cerrar", texto: "Cerrar el archivo" },
    ]
  },
  {
    id: "datosEncubiertos",
    titulo: "Datos encubiertos",
    ubicacion: "NovaSphere / Datos encubiertos",
    etiqueta: "HALLAZGO",
    tema: "cyan",
    tipo: "narrativa",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Comparaste el informe público con los registros internos. Las horas del accidente no coinciden y encontraste una orden para modificar los datos.",
      "Descubriste que alguien intentó encubrir lo que pasó.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "responsable",
    titulo: "El responsable del accidente",
    ubicacion: "NovaSphere / Investigación del responsable",
    etiqueta: "TU DECISIÓN",
    tema: "cyan",
    tipo: "decision",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "La explicación oficial no aclara por qué se modificaron los registros. Podés seguir investigando para descubrir quién dio la orden.",
    ],
    pregunta: "¿Cómo seguís?",
    opciones: [
      { id: "investigar-responsable", texto: "Investigar al responsable" },
      { id: "aceptar-explicacion", texto: "Aceptar la explicación oficial" },
    ]
  },
  {
    id: "inscripcionEncontrada",
    titulo: "Acceso registrado",
    ubicacion: "NovaSphere / Permisos internos",
    etiqueta: "LA HISTORIA",
    tema: "violeta",
    tipo: "narrativa",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Seguís la cadena de permisos y encontrás un nombre entre las referencias del accidente: AURORA.",
      "Un aviso aparece en la terminal: «Acceso registrado». Mirás hacia la puerta. «Si sigo, van a saberlo».",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "pistaAurora",
    titulo: "La inscripción AURORA",
    ubicacion: "NovaSphere / Inscripción AURORA",
    etiqueta: "TU DECISIÓN",
    tema: "violeta",
    tipo: "decision",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Al investigar al responsable, encontraste una cadena de permisos con un nombre: AURORA. Los archivos también mencionan a NorthBio.",
      "La computadora muestra un aviso de acceso registrado. Seguir la pista puede ser peligroso.",
    ],
    pregunta: "¿Querés continuar la investigación?",
    opciones: [
      { id: "seguir-pista", texto: "Guardar los archivos y seguir la pista" },
      { id: "terminar", texto: "Terminar la investigación" },
    ]
  },
  {
    id: "nuevaPostulacion",
    titulo: "Volver a buscar una oportunidad",
    ubicacion: "Canadá / Nueva postulación",
    etiqueta: "LA HISTORIA",
    tema: "azul",
    tipo: "narrativa",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Cerraste el informe sin revisar los anexos. Dejás de lado esa investigación y volvés a las ofertas de trabajo.",
      "La postulación de NorthBio sigue disponible. Continuás tu búsqueda allí, sin conocer lo que ocultaba el informe de NovaSphere.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "transicionNorthBio",
    titulo: "El otro extremo de la conexión",
    ubicacion: "Canadá / Camino a NorthBio",
    etiqueta: "LA HISTORIA",
    tema: "violeta",
    tipo: "narrativa",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Guardaste los archivos que mencionan AURORA. Una referencia de intercambio de datos conecta NovaSphere con NorthBio.",
      "Viajás al complejo de neurociencias. En el teléfono recibís otro mensaje: «Todo bien en casa. No tardes». Guardás el celular y seguís adelante.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "llegadaNorthBio",
    titulo: "Fuera del recorrido",
    ubicacion: "NorthBio / Ala de investigación",
    etiqueta: "LA HISTORIA",
    tema: "azul",
    tipo: "narrativa",
    imagen: "./assets/img/03_northbio.png",
    personaje: "",
    animacion: "",
    textos: [
      "Un guardia te recibe en NorthBio: «El ala de investigación no forma parte de tu recorrido».",
      "Al girar por un pasillo vacío, notás un resplandor detrás de una puerta entreabierta. La placa dice «Acceso restringido».",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "salaRestringida",
    titulo: "Una puerta entreabierta",
    ubicacion: "NorthBio / Sala restringida",
    etiqueta: "TU DECISIÓN",
    tema: "azul",
    tipo: "decision",
    imagen: "./assets/img/04_sala_restringida.png",
    personaje: "",
    animacion: "",
    textos: [
      "Hay algo encendido dentro de la sala. La luz alcanza el marco de la puerta y el pasillo permanece en silencio.",
      "Podés acercarte para averiguar qué hay o seguir por el corredor sin entrar.",
    ],
    pregunta: "¿Qué hacés frente a la sala restringida?",
    opciones: [
      { id: "investigar-sala", texto: "Investigar la sala" },
      { id: "alejarse", texto: "Alejarme" },
    ]
  },
  {
    id: "tecnologiaEncontrada",
    titulo: "Algo que reconocés",
    ubicacion: "NorthBio / Tecnología neuronal",
    etiqueta: "LA HISTORIA",
    tema: "azul",
    tipo: "narrativa",
    imagen: "./assets/img/05_investigar_mas.png",
    personaje: "",
    animacion: "",
    textos: [
      "Entraste a la sala. Diagramas de actividad cerebral iluminan un dispositivo. Reconocés conceptos de tus estudios, llevados mucho más lejos de lo que habías visto.",
      "«¿Están copiando algo?». Te acercás a la consola entre el asombro y el temor.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "dispositivoNeuronal",
    titulo: "La mente como señal",
    ubicacion: "NorthBio / Dispositivo neuronal",
    etiqueta: "TU DECISIÓN",
    tema: "azul",
    tipo: "decision",
    imagen: "./assets/img/07_tecnologia_neuronal_SOLO_FONDO.png",
    personaje: "",
    animacion: "",
    textos: [
      "El dispositivo responde con pulsos regulares. Su interfaz permite examinar una transmisión, pero todavía no sabés qué transporta.",
      "Podés inspeccionarlo o salir sin tocar nada.",
    ],
    pregunta: "¿Cómo reaccionás ante el dispositivo?",
    opciones: [
      { id: "inspeccionar", texto: "Inspeccionar el dispositivo" },
      { id: "salir", texto: "No tocar nada y salir" },
    ]
  },
  {
    id: "flujoAurora",
    titulo: "Destino: AURORA",
    ubicacion: "NorthBio / Terminal de datos",
    etiqueta: "HALLAZGO",
    tema: "violeta",
    tipo: "narrativa",
    imagen: "./assets/img/08_inspeccionar_dispositivo.png",
    personaje: "",
    animacion: "",
    textos: [
      "Al inspeccionar el dispositivo encontrás una transmisión activa. El destino está escrito en la terminal: AURORA.",
      "Los pitidos se aceleran mientras el flujo de datos continúa.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "transferencia",
    titulo: "Al otro lado de los datos",
    ubicacion: "NorthBio / Transferencia activa",
    etiqueta: "TU DECISIÓN",
    tema: "violeta",
    tipo: "decision",
    imagen: "./assets/img/10_transferencia_hacia_AURORA.png",
    personaje: "",
    animacion: "",
    textos: [
      "La transmisión permanece activa. Podés rastrear su camino para descubrir cómo se conecta con el proyecto.",
      "Si cerrás el sistema, dejarás esa pista sin comprobar.",
    ],
    pregunta: "¿Seguís la transferencia?",
    opciones: [
      { id: "seguir-datos", texto: "Seguir el camino de los datos" },
      { id: "cerrar-sistema", texto: "Cerrar el sistema" },
    ]
  },
  {
    id: "propuesta",
    titulo: "Una oportunidad extraordinaria",
    ubicacion: "NorthBio / La propuesta",
    etiqueta: "LA HISTORIA",
    tema: "violeta",
    tipo: "narrativa",
    imagen: "./assets/img/13_propuesta_AURORA_SOLO_FONDO.png",
    personaje: "",
    animacion: "",
    textos: [
      "Una representante de NorthBio te recibe frente a una puerta blanca. «Revisamos tu perfil. Tenemos una oportunidad extraordinaria».",
      "La empresa te propone participar en una prueba de AURORA. Observás el consentimiento y recordás a tu mamá.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "experimento",
    titulo: "Tu última decisión",
    ubicacion: "NorthBio / Experimento AURORA",
    etiqueta: "TU DECISIÓN",
    tema: "violeta",
    tipo: "decision",
    imagen: "./assets/img/13_propuesta_AURORA_SOLO_FONDO.png",
    personaje: "",
    animacion: "",
    textos: [
      "El consentimiento espera tu respuesta. NorthBio presenta su investigación como una oportunidad para preservar la conciencia humana.",
      "Pensás en tu familia y en todo lo que viste. Esta vez, la decisión te involucra directamente.",
    ],
    pregunta: "¿Aceptás participar en el experimento?",
    opciones: [
      { id: "aceptar-experimento", texto: "Aceptar el experimento" },
      { id: "rechazar-experimento", texto: "Rechazar la prueba" },
    ]
  },
  {
    id: "final1",
    titulo: "La explicación oficial",
    ubicacion: "NovaSphere / Epílogo",
    etiqueta: "DESENLACE",
    tema: "rojo",
    tipo: "final",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Aceptaste la explicación oficial del accidente y dejaste de buscar al responsable. La investigación termina sin que descubras la verdad.",
      "La empresa descubre tu indagación. NovaSphere te despide y no conseguís la estabilidad que necesitabas. Tu mamá muere.",
      "Los registros permanecen cerrados. La versión oficial es la única que queda.",
    ],
    pregunta: "",
    opciones: [
      { id: "volver", texto: "Volver al inicio" },
      { id: "reiniciar", texto: "Jugar otra vez" },
    ]
  },
  {
    id: "final2",
    titulo: "Investigación inconclusa",
    ubicacion: "NovaSphere / Epílogo",
    etiqueta: "DESENLACE",
    tema: "rojo",
    tipo: "final",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Encontraste la inscripción AURORA, pero decidiste que continuar investigando era demasiado peligroso. Abandonaste la pista sin descubrir toda la verdad.",
      "La empresa descubre tu investigación. NovaSphere te despide y, sin conseguir la estabilidad que necesitabas, tu mamá muere.",
      "La investigación queda inconclusa.",
    ],
    pregunta: "",
    opciones: [
      { id: "volver", texto: "Volver al inicio" },
      { id: "reiniciar", texto: "Jugar otra vez" },
    ]
  },
  {
    id: "final3",
    titulo: "Al otro lado del silencio",
    ubicacion: "NorthBio / Epílogo",
    etiqueta: "DESENLACE",
    tema: "rojo",
    tipo: "final",
    imagen: "./assets/img/14_aceptar_experimento_TRANSICION.png",
    personaje: "",
    animacion: "",
    textos: [
      "Aceptaste el experimento sin reunir las pruebas necesarias para conocer el verdadero propósito de AURORA.",
      "La transferencia comienza. Tu destino queda ligado al proyecto sin que comprendas completamente qué está ocurriendo.",
      "No sabés qué parte de vos cruzará al otro lado ni qué quedará atrás.",
    ],
    pregunta: "",
    opciones: [
      { id: "volver", texto: "Volver al inicio" },
      { id: "reiniciar", texto: "Jugar otra vez" },
    ]
  },
  {
    id: "final4",
    titulo: "Fragmentos de la verdad",
    ubicacion: "NorthBio / Epílogo",
    etiqueta: "DESENLACE",
    tema: "violeta",
    tipo: "final",
    imagen: "./assets/img/14_aceptar_experimento_TRANSICION.png",
    personaje: "",
    animacion: "",
    textos: [
      "Aceptaste el experimento sabiendo que los accidentes y los registros alterados estaban relacionados con el proyecto.",
      "Reuniste parte de la conexión entre las empresas, pero todavía no comprendés por completo la naturaleza de la transferencia.",
      "La prueba comienza. Estás cerca del secreto que perseguías; ahora formás parte de él.",
    ],
    pregunta: "",
    opciones: [
      { id: "volver", texto: "Volver al inicio" },
      { id: "reiniciar", texto: "Jugar otra vez" },
    ]
  },
  {
    id: "final5",
    titulo: "AURORA: Awakening",
    ubicacion: "NorthBio / Epílogo",
    etiqueta: "DESENLACE",
    tema: "violeta",
    tipo: "final",
    imagen: "./assets/img/16_FIN100_aceptar_despertar.png",
    personaje: "",
    animacion: "",
    textos: [
      "Reconstruiste la conexión completa: NovaSphere, NorthBio y AURORA. Los registros alterados, los accidentes y la tecnología neuronal forman parte de la misma historia.",
      "Aceptás el experimento con la verdad reconstruida. La transferencia comienza y abandonás tu cuerpo humano.",
      "Abrís los ojos. Intentás mover una mano y una estructura metálica responde. Tu conciencia despertó en un cuerpo robótico. Sos Annie, y estás dentro de AURORA.",
      "La historia continúa en AURORA: Awakening.",
    ],
    pregunta: "",
    opciones: [
      { id: "volver", texto: "Volver al inicio" },
      { id: "reiniciar", texto: "Jugar otra vez" },
    ]
  },
  {
    id: "final6",
    titulo: "La puerta se cierra",
    ubicacion: "NorthBio / Epílogo",
    etiqueta: "DESENLACE",
    tema: "rojo",
    tipo: "final",
    imagen: "./assets/img/15_rechazar_prueba_TRANSICION.png",
    personaje: "",
    animacion: "",
    textos: [
      "Rechazaste la prueba por desconfianza, sin reunir información suficiente para comprender el secreto de NorthBio.",
      "La empresa te despide. Volvés a buscar trabajo, pero el tiempo se agota y tu mamá muere.",
      "AURORA sigue funcionando detrás de una puerta que ya no podés abrir.",
    ],
    pregunta: "",
    opciones: [
      { id: "volver", texto: "Volver al inicio" },
      { id: "reiniciar", texto: "Jugar otra vez" },
    ]
  },
  {
    id: "final7",
    titulo: "La verdad incompleta",
    ubicacion: "NorthBio / Epílogo",
    etiqueta: "DESENLACE",
    tema: "azul",
    tipo: "final",
    imagen: "./assets/img/15_rechazar_prueba_TRANSICION.png",
    personaje: "",
    animacion: "",
    textos: [
      "Sabés que los accidentes se relacionan con AURORA, aunque todavía te faltan pruebas para comprender todo el proyecto.",
      "Rechazaste el experimento y abandonaste la investigación. La información que reuniste es insuficiente.",
      "Tiempo después, NorthBio te despide y tu mamá muere. Conservás fragmentos de una historia que las empresas nunca van a contar.",
    ],
    pregunta: "",
    opciones: [
      { id: "volver", texto: "Volver al inicio" },
      { id: "reiniciar", texto: "Jugar otra vez" },
    ]
  },
  {
    id: "final8",
    titulo: "La verdad, a cualquier precio",
    ubicacion: "NorthBio / Epílogo",
    etiqueta: "DESENLACE",
    tema: "violeta",
    tipo: "final",
    imagen: "./assets/img/17_FIN100_rechazar_epilogo.png",
    personaje: "",
    animacion: "",
    textos: [
      "Reconstruiste el vínculo completo entre NovaSphere, NorthBio y AURORA. Sabés lo que significa transferir tu conciencia y te negás a entregarla.",
      "Huís con las pruebas, pero las empresas se encubren entre sí. Tu intento de exponerlas no logra cambiar el resultado.",
      "NorthBio te despide y tu mamá muere. Conocés la verdad y seguís siendo vos; esa certeza no borra lo que perdiste.",
    ],
    pregunta: "",
    opciones: [
      { id: "volver", texto: "Volver al inicio" },
      { id: "reiniciar", texto: "Jugar otra vez" },
    ]
  },
  {
    id: "creditos",
    titulo: "Detrás de AURORA",
    ubicacion: "Equipo AURORA",
    etiqueta: "CRÉDITOS",
    tema: "cyan",
    tipo: "creditos",
    imagen: "",
    personaje: "",
    animacion: "",
    textos: [
      "Valentino Carribale: historia y diseño narrativo.",
      "Agustín Bianchi: programación y lógica.",
      "Agustín Perriello: diseño visual y producción multimedia.",
      "Tomás Barcudi: apoyo, revisión y seguimiento.",
      "Colegio Del Carmen · 4.º Bachiller en Informática · FSD y Producción Multimedial · 2026.",
    ],
    pregunta: "",
    opciones: [
      { id: "volver", texto: "Volver al inicio" },
    ]
  },
];
