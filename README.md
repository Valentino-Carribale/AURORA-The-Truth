# AURORA: The Truth · Sprint 5

Versión candidata jugable de punta a punta: diez decisiones, ocho finales y 62 recorridos completos. Se integraron los recursos terminados recibidos y las escenas intermedias. La única pieza multimedia pendiente es la cinemática MP4 inicial.

## Abrir y jugar

1. Descomprimí el ZIP.
2. Abrí la carpeta `AURORA-The-Truth` en VS Code.
3. Hacé clic derecho en `index.html` → **Open with Live Server**.
4. Pulsá **Comenzar**. En la introducción podés continuar aunque el video todavía no esté disponible.

No requiere instalar paquetes, compilar ni conectar una base de datos. Los `import`/`export` necesitan HTTP/HTTPS: abrir `index.html` con doble clic (`file://`) no sirve para ejecutar los módulos.

También podés ejecutar `python -m http.server 5500` desde la carpeta del proyecto y abrir `http://localhost:5500/`.

## Qué incluye esta versión

- Los mismos diez nodos de decisión y los ocho desenlaces del Sprint 4.
- 55 pantallas en total, incluidas portada, créditos y 22 nuevas intermedias.
- Las 49 imágenes de escenas recibidas, tres GIF y 23 archivos de audio (75 medios únicos).
- Los sonidos del CSV `assets/sonido/ESCENAS_Y_AUDIOS.csv`, asignados a sus escenas.
- Once narraciones MP3 en sus respectivas intermedias. Al cambiar de escena se detiene la narración anterior.
- Narración escrita en todas las escenas. **Leer narración** usa la grabación cuando existe o la voz en español del dispositivo cuando está disponible; esa voz no es un archivo incluido ni un servicio externo del juego.
- **Silenciar sonido / Activar sonido** controla ambientes, música, efectos y narración. La preferencia se conserva durante la sesión.
- Los GIF solamente aparecen sobre escenarios `SOLO_FONDO`: Annie en tecnología neuronal; empleado en la decisión de AURORA y en el despido previo a los finales 6 y 7.
- Las imágenes de aceptar/rechazar funcionan como transiciones. Cada epílogo tiene su ilustración específica.
- Navegación por teclado, foco en el título al cambiar de escena y adaptación móvil sin desbordamiento horizontal.

`Madre.png`, los `.AI` y los `.FLA` se conservan como materiales de producción. No se cargan en el juego. La imagen de la madre queda destinada a la futura cinemática, según la aclaración del equipo.

## Organización y código

| Archivo o carpeta | Función |
| --- | --- |
| `index.html` | Cabecera, navegación permanente, contenedor y pie |
| `css/style.css` | Identidad visual, composición, superposiciones y responsive |
| `js/app.js` | Variables, estados, renderizado, eventos y condiciones de finales |
| `js/audio.js` | Reproducción, silenciamiento y lectura de narraciones |
| `js/db/escenas.js` | Array exportado con textos, opciones y rutas de recursos |
| `assets/` | Medios originales, fuentes de producción y CSV recibido |
| `docs/` | Mapa de recursos, pruebas, publicación y seguimiento |
| `tests/verificar.mjs` | Verificación de recorridos y recursos con Node.js, sin dependencias |
| `sprints/` | Documentación y referencias del proyecto |

Se mantiene el enfoque de PokeApp: arrays, objetos, funciones, ciclos, condicionales, `querySelector`, `innerHTML` y `addEventListener`. No hay motor de juego ni framework. Los eventos de las diez decisiones siguen en funciones `iniciar...` de `app.js`.

`mostrarIntermedias(ids, continuar)` muestra una secuencia breve antes de retomar el destino original. Las recompensas se aplican solamente en el clic de decisión, nunca al continuar una intermedia.

No hay guardado persistente: recargar vuelve al inicio. **Inicio** vuelve al menú; **Comenzar** y **Jugar otra vez** reinician las variables.

## Investigación y finales

La variable global `investigacion` no se muestra al jugador. Suma 10 por investigar anomalías, conservar copias, revisar anexos, investigar al responsable, entrar a la sala, inspeccionar el dispositivo y seguir los datos; seguir la pista de AURORA suma 30. El máximo real es 100. Entrar directamente a NorthBio permite llegar a 30.

| Final | Condición |
| --- | --- |
| 1 · Explicación oficial | Aceptar la explicación en NovaSphere |
| 2 · Investigación inconclusa | Terminar la investigación en la pista AURORA |
| 3 · Al otro lado del silencio | Aceptar el experimento, investigación menor que 50 |
| 4 · Fragmentos de la verdad | Aceptar, investigación entre 50 y 99 |
| 5 · AURORA: Awakening | Aceptar, investigación igual a 100 |
| 6 · La puerta se cierra | Rechazar, investigación menor que 50 |
| 7 · La verdad incompleta | Rechazar, investigación entre 50 y 99 |
| 8 · La verdad, a cualquier precio | Rechazar, investigación igual a 100 |

Las demás variables y `estados` conservan las consecuencias: copias borradas o guardadas, informe cerrado, sala ignorada, dispositivo sin inspeccionar y transferencia sin rastrear. `empresaElegida` registra la primera postulación, aunque la historia pase después a NorthBio.

## Agregar la cinemática inicial

1. Guardá el MP4 terminado en `assets/videos/introduccion.mp4` (creá la carpeta si hace falta).
2. En `js/db/escenas.js`, buscá `id: "introduccion"`.
3. Completá `cinematica: "./assets/videos/introduccion.mp4"`.
4. Probalo por HTTP: aparecen los controles del video y desaparece el único espacio pendiente. **Continuar** permanece disponible.

Para conservar audio y video compatibles, exportá MP4 con video H.264 y audio AAC. El cargador también conserva soporte para animaciones de video MP4/WebM/Ogg; los GIF se insertan como imágenes animadas.

## Verificación y entrega

Ejecutá `node tests/verificar.mjs` para comprobar las rutas de recursos, las 20 opciones, los 62 recorridos, los límites 49/50 y 99/100, los ocho finales y el reinicio.

- [Guía de publicación](docs/publicar-en-internet.md).
- [Pruebas y correcciones del Sprint 5](docs/pruebas-sprint5.md).
- [Mapa y criterios de recursos](docs/recursos-sprint5.md).
- [Relación completa de escenas y archivos](docs/mapa-recursos-sprint5.csv).
- [Pendientes y evidencias de entrega](docs/entrega-sprint5.md).

Los documentos del Sprint 3 y 4 se conservan como historial y describen aquellas versiones. El estado actual es el de este README y los documentos del Sprint 5.
