// Ambientes automáticos y dos voces con reproducción manual.
const botonSonido = document.querySelector("#boton-sonido");
let sonidoActivado = true;
let ambiente = null;
let rutaAmbiente = "";
let efectos = [];
let voces = [];
let vozActual = null;
let numeroEscena = 0;

function actualizarBotonSonido() {
  botonSonido.textContent = sonidoActivado ? "Silenciar sonido" : "Activar sonido";
  botonSonido.setAttribute("aria-pressed", String(sonidoActivado));
  const video = document.querySelector(".escenario video");
  if (video) video.muted = !sonidoActivado;
}

function reproducir(audio) {
  if (!audio || !sonidoActivado) return;
  audio.play().catch(function () {
    // Los efectos no impiden continuar si el navegador requiere un primer gesto.
  });
}

function actualizarVoz(voz) {
  const reproduciendo = vozActual === voz && voz.audio && !voz.audio.paused;
  let accion = "Reproducir";
  if (reproduciendo) accion = "Pausar";
  else if (voz.audio?.ended) accion = "Repetir";
  else if (voz.audio && voz.audio.currentTime > 0) accion = "Reanudar";
  voz.boton.textContent = accion + " " + voz.nombre;
  voz.boton.setAttribute("aria-pressed", String(Boolean(reproduciendo)));
}

function pausarVoz() {
  if (vozActual) {
    const anterior = vozActual;
    vozActual = null;
    anterior.intento = anterior.intento + 1;
    if (anterior.audio) anterior.audio.pause();
    actualizarVoz(anterior);
  }
  if (ambiente) ambiente.volume = 0.22;
}

export function pausarAudio() {
  if (ambiente) ambiente.pause();
  for (const efecto of efectos) efecto.pause();
  pausarVoz();
}

function crearVoz(ruta, respaldo, boton, estado, nombre) {
  const numero = numeroEscena;
  const voz = { ruta, respaldo, boton, estado, nombre, audio: null, usandoRespaldo: false, intento: 0 };
  voces.push(voz);
  boton.disabled = !ruta;
  boton.textContent = "Reproducir " + nombre;
  boton.setAttribute("aria-pressed", "false");
  if (!ruta) {
    estado.textContent = "La grabación de Annie está pendiente de generación. Podés leer su pensamiento.";
    return;
  }
  boton.addEventListener("click", function () {
    if (numero !== numeroEscena) return;
    if (vozActual === voz && voz.audio && !voz.audio.paused) {
      pausarVoz();
      return;
    }
    pausarVoz();
    sonidoActivado = true;
    actualizarBotonSonido();
    const video = document.querySelector(".escenario video");
    if (video) video.pause();
    reproducir(ambiente);
    iniciarVoz(voz, numero);
  });
}

function iniciarVoz(voz, numero) {
  voz.estado.textContent = "";
  if (!voz.audio) {
    const audio = new Audio(voz.usandoRespaldo ? voz.respaldo : voz.ruta);
    voz.audio = audio;
    audio.preload = "none";
    audio.addEventListener("play", function () {
      if (numero !== numeroEscena || vozActual !== voz || !sonidoActivado) {
        audio.pause();
        return;
      }
      if (ambiente) ambiente.volume = 0.08;
      actualizarVoz(voz);
    });
    audio.addEventListener("ended", function () {
      if (numero !== numeroEscena) return;
      if (vozActual === voz) {
        vozActual = null;
        if (ambiente) ambiente.volume = 0.22;
      }
      actualizarVoz(voz);
    });
    audio.addEventListener("error", function () {
      if (numero !== numeroEscena || voz.audio !== audio) return;
      const continuar = vozActual === voz && sonidoActivado;
      if (vozActual === voz) pausarVoz();
      voz.audio = null;
      if (!voz.usandoRespaldo && voz.respaldo) {
        voz.usandoRespaldo = true;
        if (continuar) iniciarVoz(voz, numero);
      } else {
        voz.estado.textContent = "No se pudo reproducir esta voz. Podés reintentar o seguir leyendo.";
      }
      actualizarVoz(voz);
    });
  }
  if (voz.audio.ended) voz.audio.currentTime = 0;
  vozActual = voz;
  const audio = voz.audio;
  voz.intento = voz.intento + 1;
  const intento = voz.intento;
  audio.play().catch(function () {
    if (numero !== numeroEscena || voz.audio !== audio || voz.intento !== intento) return;
    if (vozActual === voz) pausarVoz();
    voz.estado.textContent = "El navegador no pudo iniciar el audio. Volvé a pulsar Reproducir.";
  });
}

export function prepararAudio(escena, pensamiento = null) {
  pausarVoz();
  numeroEscena = numeroEscena + 1;
  for (const voz of voces) if (voz.audio) voz.audio.pause();
  voces = [];
  actualizarBotonSonido();
  for (const efecto of efectos) efecto.pause();
  efectos = [];

  let nuevaRuta = "";
  for (const ruta of escena.sonidos || []) {
    if (ruta.includes("/Ambientes/") || ruta.includes("/Musica/")) nuevaRuta = ruta;
    else efectos.push(new Audio(ruta));
  }
  if (nuevaRuta !== rutaAmbiente) {
    if (ambiente) ambiente.pause();
    rutaAmbiente = nuevaRuta;
    ambiente = nuevaRuta ? new Audio(nuevaRuta) : null;
    if (ambiente) {
      ambiente.loop = true;
      ambiente.volume = 0.22;
    }
  }
  reproducir(ambiente);
  for (const efecto of efectos) {
    efecto.volume = 0.35;
    reproducir(efecto);
  }

  const boton = document.querySelector("#boton-narracion");
  document.querySelector(".controles-narracion").hidden = !escena.narracion;
  if (escena.narracion) {
    crearVoz(escena.narracion, escena.narracionOriginal, boton, document.querySelector("#estado-audio"), "narrador");
  }
  if (pensamiento) {
    crearVoz(pensamiento.audio, "", document.querySelector("#boton-pensamiento"), document.querySelector("#estado-pensamiento"), "voz de Annie");
  }
  // Entrar a una escena o activar el sonido nunca inicia ninguna de las voces.
}

export function iniciarAudio() {
  actualizarBotonSonido();
  botonSonido.addEventListener("click", function () {
    sonidoActivado = !sonidoActivado;
    actualizarBotonSonido();
    if (sonidoActivado) reproducir(ambiente);
    else pausarAudio();
  });
}
