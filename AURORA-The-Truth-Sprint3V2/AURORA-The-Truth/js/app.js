import { escenas } from "./db/escenas.js";

const pantalla = document.querySelector("#pantalla");
let investigacion = 0;
let empresaElegida = "Ninguna";
let pruebasGuardadas = false;
let estadoJuego = "Inicio";


function mostrarEscena(id) {
  for (const escena of escenas) {
    if (escena.id === id) {
      pantalla.innerHTML = `
        <section>
          <h2>${escena.titulo}</h2>
          <div class="imagenes">
            <div class="escenario"></div>
            <div class="personaje"></div>
          </div>
          <div id="texto"></div>
          <div id="opciones"></div>
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
      for (const opcion of escena.opciones) {
        opciones.innerHTML += `<button id="${opcion.id}">${opcion.texto}</button>`;
      }
    }
  }
}

function iniciarInicio() {
  estadoJuego = "Inicio";
  const comenzar = document.querySelector("#comenzar");
  comenzar.addEventListener("click", function () {
    investigacion = 0;
    empresaElegida = "Ninguna";
    pruebasGuardadas = false;
    estadoJuego = "En_Curso";
    mostrarEscena("introduccion");
    iniciarIntroduccion();
  });
}

function iniciarIntroduccion() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    mostrarEscena("postulacion");
    iniciarPostulacion();
  });
}

function iniciarPostulacion() {
  const novasphere = document.querySelector("#novasphere");
  novasphere.addEventListener("click", function () {
    empresaElegida = "NovaSphere";
    mostrarEscena("anomalias");
    iniciarAnomalias();
  });

  const northbio = document.querySelector("#northbio");
  northbio.addEventListener("click", function () {
    // Esta opción todavía no está programada.
  });
}

function iniciarAnomalias() {
  const investigar = document.querySelector("#investigar");
  investigar.addEventListener("click", function () {
    investigacion = investigacion + 10;
    mostrarEscena("registros");
    iniciarRegistros();
  });

  const ignorar = document.querySelector("#ignorar");
  ignorar.addEventListener("click", function () {
    // Esta opción todavía no está programada.
  });
}

function iniciarRegistros() {
  const guardar = document.querySelector("#guardar");
  guardar.addEventListener("click", function () {
    investigacion = investigacion + 10;
    pruebasGuardadas = true;
    mostrarEscena("informe");
    iniciarInforme();
  });

  const borrar = document.querySelector("#borrar");
  borrar.addEventListener("click", function () {
    // Esta opción todavía no está programada.
  });
}

function iniciarInforme() {
  if (pruebasGuardadas === true) {
    const texto = document.querySelector("#texto");
    texto.innerHTML = "<p>Conservás las copias de los registros que guardaste.</p>" + texto.innerHTML;
  }

  const revisar = document.querySelector("#revisar");
  revisar.addEventListener("click", function () {
    investigacion = investigacion + 10;
    mostrarEscena("datosEncubiertos");
    iniciarDatosEncubiertos();
  });

  const cerrar = document.querySelector("#cerrar");
  cerrar.addEventListener("click", function () {
    // Esta opción todavía no está programada.
  });
}

function iniciarDatosEncubiertos() {
  const continuar = document.querySelector("#continuar");
  continuar.addEventListener("click", function () {
    mostrarEscena("responsable");
    iniciarResponsable();
  });
}

function iniciarResponsable() {
  const investigarResponsable = document.querySelector("#investigar-responsable");
  investigarResponsable.addEventListener("click", function () {
    investigacion = investigacion + 10;
    mostrarEscena("pistaAurora");
    iniciarPistaAurora();
  });

  const aceptarExplicacion = document.querySelector("#aceptar-explicacion");
  aceptarExplicacion.addEventListener("click", function () {
    // Esta opción todavía no está programada.
  });
}

function iniciarPistaAurora() {
  const terminar = document.querySelector("#terminar");
  terminar.addEventListener("click", function () {
    estadoJuego = "Finalizado";
    mostrarEscena("final");
    iniciarFinal();
  });

  const seguirPista = document.querySelector("#seguir-pista");
  seguirPista.addEventListener("click", function () {
    // Esta opción todavía no está programada.
  });
}

function iniciarFinal() {
  const volver = document.querySelector("#volver");
  volver.addEventListener("click", function () {
    mostrarEscena("inicio");
    iniciarInicio();
  });
}

const botonInicio = document.querySelector("#boton-inicio");
botonInicio.addEventListener("click", function () {
  mostrarEscena("inicio");
  iniciarInicio();
});

mostrarEscena("inicio");
iniciarInicio();
