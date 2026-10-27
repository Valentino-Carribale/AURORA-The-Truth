
export const escenas = [
  {
    id: "inicio",
    titulo: "Inicio",
    textos: [
      "Una aventura de ciencia ficción y misterio.",
    ],
    pregunta: "",
    opciones: [
      { id: "comenzar", texto: "Comenzar" },
    ]
  },
  {
    id: "introduccion",
    titulo: "La historia de Annie",
    textos: [
      "Vivís en Canadá y te apasiona la biotecnología. Tuviste que dejar los estudios después de la muerte de tu papá para cuidar a tu mamá enferma.",
      "Necesitás conseguir trabajo para ayudarla. Encontraste dos empresas que podrían darte una oportunidad: NovaSphere y NorthBio.",
    ],
    pregunta: "",
    opciones: [
      { id: "continuar", texto: "Continuar" },
    ]
  },
  {
    id: "postulacion",
    titulo: "Elegir empresa",
    textos: [
      "NovaSphere trabaja en biotecnología. NorthBio se dedica a las neurociencias y la inteligencia artificial.",
    ],
    pregunta: "¿Dónde querés postularte?",
    opciones: [
      { id: "novasphere", texto: "NovaSphere" },
      { id: "northbio", texto: "NorthBio (pendiente)" },
    ]
  },
  {
    id: "anomalias",
    titulo: "NovaSphere: anomalías",
    textos: [
      "En tu primer día, una supervisora te pide que limpies los registros del laboratorio y te recuerda que son confidenciales.",
      "Notás que algunos procedimientos aparecen como verificados en la computadora, pero los documentos indican que todavía están pendientes.",
    ],
    pregunta: "¿Qué hacés?",
    opciones: [
      { id: "investigar", texto: "Investigar las anomalías" },
      { id: "ignorar", texto: "Ignorar el asunto (pendiente)" },
    ]
  },
  {
    id: "registros",
    titulo: "Registros alterados",
    textos: [
      "Al investigar, encontraste archivos con fechas modificadas y sin el nombre de quien hizo los cambios.",
    ],
    pregunta: "¿Qué hacés con las pruebas?",
    opciones: [
      { id: "guardar", texto: "Guardar copias de las pruebas" },
      { id: "borrar", texto: "Borrar las pruebas (pendiente)" },
    ]
  },
  {
    id: "informe",
    titulo: "Informe de accidente",
    textos: [
      "Mientras continuás limpiando los registros, encontrás el informe de un accidente ocurrido en las instalaciones.",
      "Hay un nombre tachado y varios archivos ocultos relacionados con el caso.",
    ],
    pregunta: "¿Qué decidís?",
    opciones: [
      { id: "revisar", texto: "Revisar los archivos ocultos" },
      { id: "cerrar", texto: "Cerrar el archivo (pendiente)" },
    ]
  },
  {
    id: "datosEncubiertos",
    titulo: "Datos encubiertos",
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
    textos: [
      "La explicación oficial no aclara por qué se modificaron los registros. Podés seguir investigando para descubrir quién dio la orden.",
    ],
    pregunta: "¿Cómo seguís?",
    opciones: [
      { id: "investigar-responsable", texto: "Investigar al responsable" },
      { id: "aceptar-explicacion", texto: "Aceptar la explicación oficial (pendiente)" },
    ]
  },
  {
    id: "pistaAurora",
    titulo: "La inscripción AURORA",
    textos: [
      "Al investigar al responsable, encontraste una cadena de permisos con un nombre: AURORA. Los archivos también mencionan a NorthBio.",
      "La computadora muestra un aviso de acceso registrado. Seguir la pista puede ser peligroso.",
    ],
    pregunta: "¿Querés continuar la investigación?",
    opciones: [
      { id: "seguir-pista", texto: "Guardar los archivos y seguir la pista (pendiente)" },
      { id: "terminar", texto: "Terminar la investigación" },
    ]
  },
  {
    id: "final",
    titulo: "Final: investigación inconclusa",
    textos: [
      "Encontraste la inscripción AURORA, pero decidiste que continuar investigando era demasiado peligroso. Abandonaste la pista sin descubrir toda la verdad.",
      "La empresa descubre tu investigación. NorthBio te despide y, sin conseguir la estabilidad que necesitabas, tu mamá muere.",
      "La investigación queda inconclusa.",
    ],
    pregunta: "",
    opciones: [
      { id: "volver", texto: "Volver al inicio" },
    ]
  },
];
