// Audio separado del renderizado. No requiere paquetes ni servicios externos.
const botonSonido = document.querySelector("#boton-sonido");
let sonidoActivado = true;
let ambiente = null;
let rutaAmbiente = "";
let efectos = [];
let narracion = null;
let escenaAudio = null;
let lectura = null;
let vozActiva = false;
let numeroNarracion = 0;

function actualizarBotonSonido() {
  botonSonido.textContent = sonidoActivado ? "Silenciar sonido" : "Activar sonido";
  botonSonido.setAttribute("aria-pressed", String(sonidoActivado));
  const video = document.querySelector(".escenario video");
  if (video) video.muted = !sonidoActivado;
}

function reproducir(audio) {
  if (!audio || !sonidoActivado) return;
  audio.play().catch(function () {
    // La historia sigue disponible si el navegador requiere otro gesto de reproducción.
  });
}

function detenerNarracion() {
  numeroNarracion = numeroNarracion + 1;
  if (narracion) narracion.pause();
  narracion = null;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  lectura = null;
  vozActiva = false;
  if (ambiente) ambiente.volume = 0.22;
}

export function pausarAudio() {
  if (ambiente) ambiente.pause();
  for (const efecto of efectos) efecto.pause();
  detenerNarracion();
  const boton = document.querySelector("#boton-narracion");
  if (boton) boton.textContent = "Leer narración";
}

function terminarLectura() {
  vozActiva = false;
  if (ambiente) ambiente.volume = 0.22;
  const boton = document.querySelector("#boton-narracion");
  if (boton) boton.textContent = "Repetir narración";
}

function iniciarNarracion(escena) {
  detenerNarracion();
  const numero = numeroNarracion;
  function alTerminar() {
    if (numero === numeroNarracion) terminarLectura();
  }
  const boton = document.querySelector("#boton-narracion");
  const estado = document.querySelector("#estado-audio");
  estado.textContent = "";
  if (escena.narracion) {
    narracion = new Audio(escena.narracion);
    narracion.volume = 1;
    narracion.addEventListener("ended", alTerminar);
    narracion.addEventListener("error", function () {
      if (numero !== numeroNarracion) return;
      estado.textContent = "No se pudo reproducir la narración. El texto sigue disponible.";
      alTerminar();
    });
    narracion.addEventListener("play", function () {
      if (numero !== numeroNarracion) return;
      if (ambiente) ambiente.volume = 0.08;
      boton.textContent = "Pausar narración";
    });
    reproducir(narracion);
  } else if ("speechSynthesis" in window && "SpeechSynthesisUtterance" in window) {
    const voces = window.speechSynthesis.getVoices();
    const voz = voces.find(function (voz) { return voz.lang === "es-AR"; }) ||
      voces.find(function (voz) { return voz.lang.startsWith("es"); });
    if (!voz) {
      estado.textContent = "La lectura por voz no está disponible en español en este dispositivo. Podés seguir leyendo el texto.";
      return;
    }
    lectura = new SpeechSynthesisUtterance(document.querySelector("#texto").textContent + " " + document.querySelector("#consecuencia").textContent);
    lectura.lang = voz.lang;
    lectura.voice = voz;
    lectura.rate = 0.95;
    lectura.addEventListener("end", alTerminar);
    lectura.addEventListener("error", alTerminar);
    vozActiva = true;
    if (ambiente) ambiente.volume = 0.08;
    boton.textContent = "Detener narración";
    window.speechSynthesis.speak(lectura);
  } else {
    estado.textContent = "La lectura por voz no está disponible en este dispositivo. Podés seguir leyendo el texto.";
  }
}

export function prepararAudio(escena) {
  escenaAudio = escena;
  actualizarBotonSonido();
  detenerNarracion();
  for (const efecto of efectos) efecto.pause();
  efectos = [];

  let nuevaRuta = "";
  for (const ruta of escena.sonidos || []) {
    if (ruta.includes("/Ambientes/") || ruta.includes("/Musica/")) nuevaRuta = ruta;
    else efectos.push(new Audio(ruta));
  }
  // El mismo ambiente continúa entre escenas; los efectos anteriores se detienen.
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
  if (escena.narracion && sonidoActivado) iniciarNarracion(escena);

  const boton = document.querySelector("#boton-narracion");
  boton.addEventListener("click", function () {
    if (escenaAudio !== escena) return;
    if (vozActiva || (narracion && !narracion.paused)) {
      detenerNarracion();
      boton.textContent = "Repetir narración";
    } else {
      sonidoActivado = true;
      actualizarBotonSonido();
      reproducir(ambiente);
      iniciarNarracion(escena);
    }
  });
}

export function iniciarAudio() {
  actualizarBotonSonido();
  botonSonido.addEventListener("click", function () {
    sonidoActivado = !sonidoActivado;
    actualizarBotonSonido();
    if (sonidoActivado) {
      reproducir(ambiente);
      if (escenaAudio && escenaAudio.narracion) iniciarNarracion(escenaAudio);
    } else {
      pausarAudio();
      const boton = document.querySelector("#boton-narracion");
      if (boton) boton.textContent = "Leer narración";
    }
  });
}
