import { escenas } from "./db/escenas.js";

const pantalla = document.querySelector("#pantalla");
let investigacion = 0;
let empresaElegida = "Ninguna";
let pruebasGuardadas = false;
let estadoJuego = "Inicio";
let escenaActual = "inicio";
let decisionExperimento = "Pendiente";
let finalAlcanzado = 0;

const estados = {
  anomalias: "Sin_revisar",
  pruebas: "No_Descubiertas",
  informe: "No_Leido",
  responsable: "No_Investigado",
  pista: "No_Seguida",
  sala: "No_Explorada",
  dispositivo: "No_Inspeccionado",
  transferencia: "No_Rastreada"
};

function reiniciarVariables() {
  investigacion = 0;
  empresaElegida = "Ninguna";
  pruebasGuardadas = false;
  estadoJuego = "En_Curso";
  decisionExperimento = "Pendiente";
  finalAlcanzado = 0;
  estados.anomalias = "Sin_revisar";
  estados.pruebas = "No_Descubiertas";
  estados.informe = "No_Leido";
  estados.responsable = "No_Investigado";
  estados.pista = "No_Seguida";
  estados.sala = "No_Explorada";
  estados.dispositivo = "No_Inspeccionado";
  estados.transferencia = "No_Rastreada";
}

// Se mantiene el renderizado con ciclos e innerHTML de la versión anterior.
function mostrarEscena(id) {
  for (const escena of escenas) {
    if (escena.id === id) {
      escenaActual = id;
      pantalla.innerHTML = `
        <section class="vista vista-${escena.tipo} tema-${escena.tema}">
          <div class="encabezado-escena">
            <p>${escena.ubicacion}</p>
            <p>AURORA / THE TRUTH</p>
          </div>
          <div class="contenido-escena">
            <div class="imagenes" role="group" aria-label="Recursos visuales de ${escena.titulo}">
              <div class="escenario" aria-label="Espacio para el escenario"></div>
              <div class="personaje" aria-label="Espacio para el personaje"></div>
            </div>
            <div class="decision">
              <p class="etiqueta">${escena.etiqueta}</p>
              <h2 id="titulo-escena" tabindex="-1">${escena.titulo}</h2>
              <div id="consecuencia" role="status"></div>
              <div id="texto"></div>
              <div id="opciones" class="opciones"></div>
            </div>
          </div>
        </section>
      `;

      const texto = document.querySelector("#texto");
      for (const parrafo of escena.textos) {
        texto.innerHTML += `<p>${parrafo}</p>`;
      }

      const opciones = document.querySelector("#opciones");
      if (escena.pregunta !== "") {
        opciones.innerHTML = `<h3>${escena.pregunta}</h3>`;
      }

      let claseBoton = "primario";
      if (escena.tipo === "decision") {
        claseBoton = "opcion";
      }
      for (const opcion of escena.opciones) {
        opciones.innerHTML += `<button type="button" class="${claseBoton}" id="${opcion.id}">${opcion.texto}</button>`;
      }

      cargarRecursos(escena);
      document.querySelector("#titulo-escena").focus({ preventScroll: true });
      window.scrollTo(0, 0);
      return;
    }
  }
  pantalla.innerHTML = "<p>No se pudo abrir la escena. Usá Inicio para volver a empezar.</p>";
}

// Las rutas vacías dejan los cuadros sin contenido hasta que el equipo agregue recursos.
function cargarRecursos(escena) {
  const escenario = document.querySelector(".escenario");
  const personaje = document.querySelector(".personaje");
  let imagen = escena.imagen;

  // La llegada a la propuesta muestra la acción que acabás de elegir.
  if (escena.id === "propuesta") {
    if (estados.sala === "Ignorada") {
      imagen = "./assets/img/06_alejarse.png";
    } else if (estados.dispositivo === "Ignorado") {
      imagen = "./assets/img/09_no_tocar_y_salir.png";
    } else if (estados.transferencia === "Sistema_Cerrado") {
      imagen = "./assets/img/12_cerrar_sistema.png";
    } else if (estados.transferencia === "Camino_Seguido") {
      imagen = "./assets/img/11_seguir_camino.png";
    }
  }

  if (imagen !== "") {
    escenario.innerHTML = `<img src="${imagen}" alt="${escena.titulo}">`;
  }

  // Las ilustraciones ya incluyen a Annie; no se superpone un cuadro vacío.
  personaje.hidden = imagen !== "" && escena.personaje === "" && escena.animacion === "";
  if (escena.animacion !== "") {
    personaje.innerHTML = `<video src="${escena.animacion}" autoplay muted playsinline aria-label="Animación del personaje"></video>`;
  } else if (escena.personaje !== "") {
    personaje.innerHTML = `<img src="${escena.personaje}" alt="Annie">`;
  }

  const recursos = document.querySelectorAll(".imagenes img, .imagenes video");
  for (const recurso of recursos) {
    recurso.addEventListener("error", function () {
      recurso.remove();
    });
  }
}

function mostrarConsecuencia(mensaje) {
  const consecuencia = document.querySelector("#consecuencia");
  consecuencia.innerHTML = `<p>${mensaje}</p>`;
}

function iniciarInicio() {
  estadoJuego = "Inicio";
  const comenzar = document.querySelector("#comenzar");
  comenzar.addEventListener("click", function () {
    if (escenaActual !== "inicio") return;
    reiniciarVariables();
    mostrarEscena("introduccion");
    iniciarIntroduccion();
  });

  const creditos = document.querySelector("#creditos");
  creditos.addEventListener("click", function () {
    mostrarEscena("creditos");
    const volver = document.querySelector("#volver");
    volver.addEventListener("click", function () {
      mostrarEscena("inicio");
      iniciarInicio();
    });
  });
}

function terminarPartida(numero) {
  estadoJuego = "Finalizado";
  finalAlcanzado = numero;
  mostrarEscena("final" + numero);
  iniciarFinal();
}

// Solo los finales de NorthBio dependen del rango de investigación.
function determinarFinal() {
  if (decisionExperimento === "Aceptado") {
    if (investigacion < 50) {
      terminarPartida(3);
    } else if (investigacion < 100) {
      terminarPartida(4);
    } else {
      terminarPartida(5);
    }
  } else if (decisionExperimento === "Rechazado") {
    if (investigacion < 50) {
      terminarPartida(6);
    } else if (investigacion < 100) {
      terminarPartida(7);
    } else {
      terminarPartida(8);
    }
  }
}

function iniciarIntroduccion() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "introduccion") return;
    mostrarEscena("postulacion");
    iniciarPostulacion();
  });
}

function iniciarPostulacion() {
  const novasphere = document.querySelector("#novasphere");
  novasphere.addEventListener("click", function () {
    if (escenaActual !== "postulacion") return;
    empresaElegida = "NovaSphere";
    mostrarEscena("primerDia");
    iniciarPrimerDia();
  });

  const northbio = document.querySelector("#northbio");
  northbio.addEventListener("click", function () {
    if (escenaActual !== "postulacion") return;
    empresaElegida = "NorthBio";
    mostrarEscena("llegadaNorthBio");
    iniciarLlegadaNorthBio();
  });
}

function iniciarPrimerDia() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "primerDia") return;
    mostrarEscena("anomalias");
    iniciarAnomalias();
  });
}

function iniciarAnomalias() {
  const investigar = document.querySelector("#investigar");
  investigar.addEventListener("click", function () {
    if (escenaActual !== "anomalias") return;
    investigacion = investigacion + 10;
    estados.anomalias = "Investigadas";
    mostrarEscena("registroAlterado");
    iniciarRegistroAlterado();
  });

  const ignorar = document.querySelector("#ignorar");
  ignorar.addEventListener("click", function () {
    if (escenaActual !== "anomalias") return;
    estados.anomalias = "Ignoradas";
    mostrarEscena("limpieza");
    iniciarLimpieza();
  });
}

function iniciarRegistroAlterado() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "registroAlterado") return;
    mostrarEscena("registros");
    iniciarRegistros();
  });
}

function iniciarRegistros() {
  const guardar = document.querySelector("#guardar");
  guardar.addEventListener("click", function () {
    if (escenaActual !== "registros") return;
    investigacion = investigacion + 10;
    pruebasGuardadas = true;
    estados.pruebas = "Guardadas";
    mostrarEscena("informeEncontrado");
    iniciarInformeEncontrado();
  });

  const borrar = document.querySelector("#borrar");
  borrar.addEventListener("click", function () {
    if (escenaActual !== "registros") return;
    pruebasGuardadas = false;
    estados.pruebas = "Borradas";
    mostrarEscena("informeEncontrado");
    iniciarInformeEncontrado();
  });
}

function iniciarLimpieza() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "limpieza") return;
    mostrarEscena("informeEncontrado");
    iniciarInformeEncontrado();
  });
}

function iniciarInformeEncontrado() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "informeEncontrado") return;
    mostrarEscena("informe");
    iniciarInforme();
  });
}

function iniciarInforme() {
  if (pruebasGuardadas === true) {
    mostrarConsecuencia("Conservás las copias de los registros que guardaste.");
  } else if (estados.pruebas === "Borradas") {
    mostrarConsecuencia("Borraste las pruebas anteriores. Ya no tenés esas copias para comparar el informe.");
  } else {
    mostrarConsecuencia("Llegaste al informe sin investigar las anomalías ni conservar registros alterados.");
  }

  const revisar = document.querySelector("#revisar");
  revisar.addEventListener("click", function () {
    if (escenaActual !== "informe") return;
    investigacion = investigacion + 10;
    estados.informe = "Revisado";
    mostrarEscena("datosEncubiertos");
    iniciarDatosEncubiertos();
  });

  const cerrar = document.querySelector("#cerrar");
  cerrar.addEventListener("click", function () {
    if (escenaActual !== "informe") return;
    estados.informe = "Cerrado";
    mostrarEscena("nuevaPostulacion");
    iniciarNuevaPostulacion();
  });
}

function iniciarDatosEncubiertos() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "datosEncubiertos") return;
    mostrarEscena("responsable");
    iniciarResponsable();
  });
}

function iniciarResponsable() {
  const investigarResponsable = document.querySelector("#investigar-responsable");
  investigarResponsable.addEventListener("click", function () {
    if (escenaActual !== "responsable") return;
    investigacion = investigacion + 10;
    estados.responsable = "Investigado";
    mostrarEscena("inscripcionEncontrada");
    iniciarInscripcionEncontrada();
  });

  const aceptarExplicacion = document.querySelector("#aceptar-explicacion");
  aceptarExplicacion.addEventListener("click", function () {
    if (escenaActual !== "responsable") return;
    estados.responsable = "Explicacion_Aceptada";
    terminarPartida(1);
  });
}

function iniciarInscripcionEncontrada() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "inscripcionEncontrada") return;
    mostrarEscena("pistaAurora");
    iniciarPistaAurora();
  });
}

function iniciarPistaAurora() {
  const seguirPista = document.querySelector("#seguir-pista");
  seguirPista.addEventListener("click", function () {
    if (escenaActual !== "pistaAurora") return;
    investigacion = investigacion + 30;
    estados.pista = "Archivos_Guardados";
    mostrarEscena("transicionNorthBio");
    iniciarTransicionNorthBio();
  });

  const terminar = document.querySelector("#terminar");
  terminar.addEventListener("click", function () {
    if (escenaActual !== "pistaAurora") return;
    estados.pista = "Investigacion_Terminada";
    terminarPartida(2);
  });
}

function iniciarNuevaPostulacion() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "nuevaPostulacion") return;
    mostrarEscena("llegadaNorthBio");
    iniciarLlegadaNorthBio();
  });
}

function iniciarTransicionNorthBio() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "transicionNorthBio") return;
    mostrarEscena("llegadaNorthBio");
    iniciarLlegadaNorthBio();
  });
}

function iniciarLlegadaNorthBio() {
  if (estados.pista === "Archivos_Guardados") {
    mostrarConsecuencia("Los archivos que guardaste te trajeron hasta NorthBio. Seguís investigando la conexión entre ambas empresas.");
  } else if (empresaElegida === "NovaSphere") {
    mostrarConsecuencia("Llegás a NorthBio después de cerrar el informe de NovaSphere. Tu búsqueda laboral continúa, pero aquella pista quedó sin revisar.");
  } else {
    mostrarConsecuencia("Tu postulación te trajo directamente a NorthBio. No conocés lo que ocurre en NovaSphere.");
  }

  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "llegadaNorthBio") return;
    mostrarEscena("salaRestringida");
    iniciarSalaRestringida();
  });
}

function iniciarSalaRestringida() {
  const investigarSala = document.querySelector("#investigar-sala");
  investigarSala.addEventListener("click", function () {
    if (escenaActual !== "salaRestringida") return;
    investigacion = investigacion + 10;
    estados.sala = "Investigada";
    mostrarEscena("tecnologiaEncontrada");
    iniciarTecnologiaEncontrada();
  });

  const alejarse = document.querySelector("#alejarse");
  alejarse.addEventListener("click", function () {
    if (escenaActual !== "salaRestringida") return;
    estados.sala = "Ignorada";
    mostrarEscena("propuesta");
    iniciarPropuesta();
  });
}

function iniciarTecnologiaEncontrada() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "tecnologiaEncontrada") return;
    mostrarEscena("dispositivoNeuronal");
    iniciarDispositivoNeuronal();
  });
}

function iniciarDispositivoNeuronal() {
  const inspeccionar = document.querySelector("#inspeccionar");
  inspeccionar.addEventListener("click", function () {
    if (escenaActual !== "dispositivoNeuronal") return;
    investigacion = investigacion + 10;
    estados.dispositivo = "Inspeccionado";
    mostrarEscena("flujoAurora");
    iniciarFlujoAurora();
  });

  const salir = document.querySelector("#salir");
  salir.addEventListener("click", function () {
    if (escenaActual !== "dispositivoNeuronal") return;
    estados.dispositivo = "Ignorado";
    mostrarEscena("propuesta");
    iniciarPropuesta();
  });
}

function iniciarFlujoAurora() {
  if (estados.pista === "Archivos_Guardados") {
    mostrarConsecuencia("Reconocés el nombre AURORA de los archivos de NovaSphere. La conexión ya no parece una coincidencia.");
  } else {
    mostrarConsecuencia("«¿Qué es AURORA?», te preguntás. Es la primera vez que encontrás ese nombre.");
  }

  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "flujoAurora") return;
    mostrarEscena("transferencia");
    iniciarTransferencia();
  });
}

function iniciarTransferencia() {
  const seguirDatos = document.querySelector("#seguir-datos");
  seguirDatos.addEventListener("click", function () {
    if (escenaActual !== "transferencia") return;
    investigacion = investigacion + 10;
    estados.transferencia = "Camino_Seguido";
    mostrarEscena("propuesta");
    iniciarPropuesta();
  });

  const cerrarSistema = document.querySelector("#cerrar-sistema");
  cerrarSistema.addEventListener("click", function () {
    if (escenaActual !== "transferencia") return;
    estados.transferencia = "Sistema_Cerrado";
    mostrarEscena("propuesta");
    iniciarPropuesta();
  });
}

function iniciarPropuesta() {
  if (estados.sala === "Ignorada") {
    mostrarConsecuencia("Te alejaste de la sala. NorthBio te convoca a la prueba igualmente, sin mostrarte lo que había dentro.");
  } else if (estados.dispositivo === "Ignorado") {
    mostrarConsecuencia("Saliste sin inspeccionar el dispositivo. La empresa te hace una propuesta sin revelar esa información.");
  } else if (estados.transferencia === "Sistema_Cerrado") {
    mostrarConsecuencia("Cerraste la consola sin seguir la transmisión. Aun así, NorthBio te propone participar.");
  } else {
    mostrarConsecuencia("Seguiste el camino de los datos hasta AURORA. NorthBio te convoca después de ese descubrimiento.");
  }

  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    if (escenaActual !== "propuesta") return;
    mostrarEscena("experimento");
    iniciarExperimento();
  });
}

function iniciarExperimento() {
  if (investigacion === 100) {
    mostrarConsecuencia("Reconstruiste el vínculo completo entre NovaSphere, NorthBio y AURORA. Sabés que la transferencia implica entregar tu conciencia a un cuerpo artificial.");
  } else if (investigacion >= 50) {
    mostrarConsecuencia("Sabés que los accidentes y los archivos alterados se relacionan con AURORA. Todavía te falta parte de la verdad sobre la transferencia.");
  } else {
    mostrarConsecuencia("No reuniste pruebas suficientes para comprender qué hay detrás de la oferta. Tenés que decidir con lo que sabés.");
  }

  const aceptarExperimento = document.querySelector("#aceptar-experimento");
  aceptarExperimento.addEventListener("click", function () {
    if (escenaActual !== "experimento") return;
    decisionExperimento = "Aceptado";
    determinarFinal();
  });

  const rechazarExperimento = document.querySelector("#rechazar-experimento");
  rechazarExperimento.addEventListener("click", function () {
    if (escenaActual !== "experimento") return;
    decisionExperimento = "Rechazado";
    determinarFinal();
  });
}

function iniciarFinal() {
  const volver = document.querySelector("#volver");
  volver.addEventListener("click", function () {
    mostrarEscena("inicio");
    iniciarInicio();
  });

  const reiniciar = document.querySelector("#reiniciar");
  reiniciar.addEventListener("click", function () {
    reiniciarVariables();
    mostrarEscena("introduccion");
    iniciarIntroduccion();
  });
}

const botonInicio = document.querySelector("#boton-inicio");
botonInicio.addEventListener("click", function () {
  mostrarEscena("inicio");
  iniciarInicio();
});

mostrarEscena("inicio");
iniciarInicio();

// El audio queda fuera de las pantallas para continuar durante la navegación.
const musicaFondo = document.querySelector("#musica-fondo");
const botonSonido = document.querySelector("#boton-sonido");
let sonidoActivado = true;
musicaFondo.volume = 0.25;

function reproducirMusica() {
  if (sonidoActivado === true && musicaFondo.paused === true) {
    musicaFondo.play().catch(function () {
      // El navegador puede requerir un clic antes de reproducir sonido.
      botonSonido.textContent = "Activar música";
    });
  }
}

musicaFondo.addEventListener("play", function () {
  botonSonido.textContent = "Silenciar música";
  botonSonido.setAttribute("aria-pressed", "true");
});

musicaFondo.addEventListener("pause", function () {
  botonSonido.textContent = "Activar música";
  botonSonido.setAttribute("aria-pressed", "false");
});

botonSonido.addEventListener("click", function () {
  if (musicaFondo.paused === true) {
    sonidoActivado = true;
    reproducirMusica();
  } else {
    sonidoActivado = false;
    musicaFondo.pause();
  }
});

document.addEventListener("click", function () {
  reproducirMusica();
});

reproducirMusica();
