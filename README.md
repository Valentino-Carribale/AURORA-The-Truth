# AURORA: The Truth

**Versión final del Sprint 5 · 18 de noviembre de 2026.**

Aventura narrativa de ciencia ficción, misterio y decisiones, ambientada en Canadá en un futuro cercano. Annie necesita conseguir trabajo para acompañar el tratamiento de su madre. Su búsqueda la lleva a NovaSphere y NorthBio, dos empresas cuyas investigaciones esconden una conexión con el proyecto AURORA.

**[Jugar en GitHub Pages](https://valentino-carribale.github.io/AURORA-The-Truth/)** · [Repositorio](https://github.com/Valentino-Carribale/AURORA-The-Truth)

## Cómo jugar

1. Elegí **Comenzar**. En la introducción podés reproducir la cinemática con los controles del video y después pulsar **Continuar**.
2. Durante la historia, toda la interacción está en el **panel derecho**. En pantallas pequeñas, el panel se ubica debajo de la escena.
3. Leé los textos y los pensamientos de Annie, o usá **Reproducir narrador** y **Reproducir voz de Annie** para escucharlos. Los mismos botones permiten pausar, reanudar y repetir.
4. Avanzá con **Continuar** y elegí qué hace Annie mediante los botones de decisión. Las elecciones determinan las pruebas que conserva, lo que comprende y el desenlace.
5. Al terminar un recorrido de NorthBio, una invitación sugiere investigar la conexión con la otra empresa y **volver a jugar desde NovaSphere**, sin mostrar puntajes ni variables internas. La nueva partida reinicia las variables y permite conectar las pistas de ambas empresas.

Las voces comienzan cuando las activás. No se reproducen automáticamente al entrar a una escena ni se superponen entre sí. Reproducir el video pausa las voces; reproducir una voz pausa el video. El control superior permite activar o silenciar el sonido.

La partida se desarrolla en la pestaña actual: recargar la página comienza nuevamente desde el inicio.

## Contenido de la versión final

- **63 pantallas:** 61 dentro de los recorridos, más inicio y créditos.
- **10 decisiones principales, 20 opciones y 62 recorridos completos**, que conducen a **ocho finales**.
- **22 escenas intermedias** para mostrar las consecuencias de las decisiones y **ocho pantallas temporales** que sitúan los días, semanas y meses de la historia.
- **75 pensamientos y variantes de Annie**, con emociones y voz interior. El contenido responde a lo que descubrió o decidió en la partida.
- **Cinemática inicial terminada e integrada:** MP4 de 1:56, 1920 × 1080, con narrador, Annie y su madre doblados con ElevenLabs.
- Escenarios de NovaSphere y NorthBio, ambientes, efectos, música y **cuatro GIF**. Sorpresa N8, Hablando N10 y el rechazo del experimento en NorthBio se muestran en primer plano. Solo la animación de los finales de NovaSphere conserva su encuadre completo.
- Instrucciones de inicio, controles manuales de audio, navegación con teclado y diseño adaptable.

## Investigación y consecuencias

La variable global `investigacion` acumula las pistas obtenidas en la partida. No alcanza con llegar al experimento: importa qué investigaste y qué pruebas conservaste.

| Tramo | Investigación posible |
| --- | --- |
| NovaSphere | Hasta 70 puntos |
| NorthBio | Hasta 30 puntos adicionales |
| Recorrido conectado entre ambas empresas | Hasta 100 puntos |

Comenzar directamente por NorthBio permite completar la historia, pero su tramo aporta como máximo 30 puntos. Para intentar alcanzar 100, empezá por NovaSphere y seguí la investigación hasta la segunda empresa. Los puntos se reinician al comenzar otra partida.

En NorthBio, aceptar o rechazar la prueba se combina con tres rangos de investigación: **menos de 50**, **de 50 a 99** y **100**. Eso produce seis desenlaces distintos. Los otros dos finales cierran recorridos de NovaSphere. También se conservan variables como `pruebasGuardadas`, `empresaElegida`, `decisionExperimento` y los estados de cada pista.

## Abrir el proyecto localmente

No requiere instalación de paquetes, compilación, base de datos externa ni claves de API.

### VS Code y Live Server

1. Descargá o cloná el repositorio y abrí la carpeta que contiene `index.html`.
2. Con la extensión **Live Server** instalada, hacé clic derecho en `index.html`.
3. Elegí **Open with Live Server**.

### Servidor de Python

Desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Abrí `http://localhost:8000`. En Windows también podés usar `py -m http.server 8000`.

El proyecto utiliza módulos JavaScript: debe servirse mediante HTTP. Abrir `index.html` con doble clic mediante `file://` puede impedir la carga de esos módulos.

## Publicación en GitHub Pages

El juego también puede abrirse directamente desde **[GitHub Pages](https://valentino-carribale.github.io/AURORA-The-Truth/)**, sin instalar Live Server.

Para publicar o actualizar esta versión:

1. Subí los archivos a la rama `main`, conservando `index.html`, `css/`, `js/` y `assets/` en la raíz del repositorio.
2. En GitHub, abrí **Settings → Pages**.
3. En **Build and deployment**, elegí **Deploy from a branch**, la rama **main** y la carpeta **/ (root)**. Guardá los cambios.
4. Esperá a que termine el despliegue y abrí el enlace que muestra GitHub Pages.
5. Revisá la cinemática, las imágenes, los GIF y ambas voces desde la página publicada. Si el navegador conserva una versión anterior, actualizá con `Ctrl + F5`.

Las rutas son relativas para que los módulos y recursos funcionen dentro de `/AURORA-The-Truth/`. Conservá exactamente los nombres de archivos, las mayúsculas, los acentos y la estructura de carpetas. Para actualizar el código, reemplazá `README.md`, `js/app.js`, `js/db/escenas.js` y `css/style.css` por los de esta entrega. Si reemplazás todo el proyecto, asegurate de subir también los recursos.

## Organización del proyecto

| Ubicación | Contenido |
| --- | --- |
| `index.html` | Documento principal, cabecera, pantalla y pie |
| `css/style.css` | Identidad visual, panel narrativo, primeros planos y adaptación a pantalla |
| `js/app.js` | Renderizado, eventos, decisiones, variables, intermedias y navegación |
| `js/audio.js` | Ambientes, efectos, voces manuales y coordinación con el video |
| `js/db/escenas.js` | Textos, instrucciones, opciones y recursos de las escenas |
| `js/db/pensamientos.js` | Emociones, pensamientos, variantes y audios de Annie |
| `assets/img/` | Escenarios, personajes e imágenes intermedias |
| `assets/animaciones/` | Cinemática MP4, animaciones GIF y fuentes FLA |
| `assets/sonido/` | Narraciones, ambientes, música, efectos y CSV de referencia |
| `sprints/` | Entregas anteriores, storyboard y árbol de decisiones |

Se conserva la estructura simple del proyecto: HTML, CSS y módulos JavaScript, con datos separados en `js/db`, renderizado mediante `innerHTML` y eventos mediante `addEventListener`.

## Cinemática y recursos sonoros

La introducción utiliza `assets/animaciones/AURORA_Introduccion.mp4`, configurado en el campo `cinematica` de la escena `introduccion`. El video tiene controles propios y se reproduce a elección del jugador.

| Voz | Intérprete generado con ElevenLabs |
| --- | --- |
| Narrador | Brian C. — Professional Latin Narrator |
| Annie | Natalia — Versatile |
| Madre de Annie, en la cinemática | Regina — Meditative, Expressive, Soft |

Los MP3 y el MP4 están incluidos en `assets`. **Para jugar no hace falta una cuenta de ElevenLabs, una clave de API ni generar audio en tiempo real.**

Los GIF se cargan como imágenes animadas y mantienen su reproducción y transparencia. Los primeros planos se realizan con CSS en Sorpresa N8, Hablando N10 y el rechazo del experimento en NorthBio; no modifican los archivos originales. La animación de los finales de NovaSphere mantiene su encuadre completo.

## Verificación y playtesting

La revisión técnica de esta entrega comprende los recorridos, los ocho finales, el rango de investigación, el reinicio de variables y las rutas de los recursos. El inventario actual contiene **207 recursos referenciados**, incluida la cinemática y los cuatro GIF.

El **registro de sesiones de playtesting y sus devoluciones queda a cargo del equipo en la entrega del Sprint 5**. Para repetir la revisión con jugadores, conviene comprobar:

- Que comprendan las instrucciones iniciales, encuentren el panel de interacción y distingan la narración del pensamiento de Annie.
- Que puedan reproducir, pausar y reanudar las voces y la cinemática sin superposiciones.
- Que los primeros planos de N8, N10 y el rechazo de NorthBio se distingan y la animación final de NovaSphere conserve su encuadre completo.
- Que completen un recorrido de NorthBio, usen la invitación a volver a jugar y comiencen una partida nueva desde NovaSphere.
- Que las decisiones de ambos tramos permitan alcanzar 100 de investigación y obtener los desenlaces correspondientes.
- Que la lectura, los botones y los recursos se mantengan utilizables en escritorio y celular, tanto localmente como en GitHub Pages.

Para cada sesión, el equipo puede registrar el recorrido, el resultado esperado, lo observado y el ajuste realizado. Las comprobaciones del código y los recursos acompañan ese registro, pero no reemplazan las observaciones de los jugadores.

## Equipo y créditos

Proyecto final de FSD y Producción Multimedial · Colegio Del Carmen · 4.º Bachiller en Informática · 2026.

- **Valentino Carribale:** producción multimedia, documentación y coordinación.
- **Agustín Bianchi:** programación y lógica.
- **Agustín Perriello:** diseño visual y producción multimedia.
- **Tomás Barcudi:** diseño visual y producción multimedia.

Voces generadas con **[ElevenLabs](https://elevenlabs.io/)**. Se conserva la atribución de las grabaciones generadas con la prueba gratuita para uso no comercial.

Música: **Sad Trio**, Kevin MacLeod ([incompetech.com](https://incompetech.com/)), licencia **Creative Commons Attribution 4.0**.
