# AURORA: The Truth

Aventura narrativa de ciencia ficción, misterio y decisiones. Actualización final del 15/11/2026: voz interior de Annie, reproducción manual y paso del tiempo. Diez decisiones, 20 opciones, 62 recorridos completos y ocho finales. La cinemática MP4 de apertura sigue pendiente.

## Jugar localmente

Abrí la carpeta del proyecto en VS Code. Con Live Server instalado, hacé clic derecho sobre `index.html` y elegí **Open with Live Server**. No abrir con doble clic: los módulos JavaScript necesitan un servidor HTTP.

También se puede usar `python -m http.server 8000` desde la carpeta del proyecto y abrir `http://localhost:8000`.

## Voces y navegación

- **Reproducir narrador** inicia la voz de Brian C. **Reproducir voz de Annie** inicia su pensamiento con Natalia.
- Cada botón permite pausar, reanudar conservando la posición y repetir al finalizar. Las voces no se superponen.
- Cambiar de escena detiene la voz anterior. Entrar a una escena y activar el sonido general no reproducen ninguna voz automáticamente.
- El ambiente y los efectos conservan su funcionamiento. El ambiente baja mientras habla una voz.
- El panel derecho presenta los pensamientos y emociones de Annie desde la introducción. Sus 14 variantes respetan lo que descubrió o decidió en cada recorrido.
- Ocho pantallas temporales sitúan los días, semanas y meses de la historia. Cada una espera el botón Continuar, sin avance automático.
- Todos los audios se sirven desde `assets`: no se necesita una cuenta ni una clave de ElevenLabs para jugar.

## Organización

| Archivo | Contenido |
| --- | --- |
| `index.html` | Cabecera, pantalla y créditos generales |
| `css/style.css` | Identidad visual, panel de Annie y adaptación a pantalla |
| `js/app.js` | Renderizado, decisiones, variables, intermedias y cronología |
| `js/audio.js` | Ambientes y controles manuales de las dos voces |
| `js/db/escenas.js` | Textos, opciones y recursos de las 63 pantallas |
| `js/db/pensamientos.js` | 75 pensamientos o variantes y sus MP3 |
| `assets/sonido/Narracion_Brian_C/` | 55 grabaciones del narrador |
| `assets/sonido/Narracion_Annie_Natalia/` | 75 grabaciones de la voz interior |
| `docs/` | Guiones, análisis narrativo, mapas, pruebas y publicación |
| `tests/` | Comprobaciones de recorridos, recursos y reproducción |

Se mantiene el estilo de módulos simples, datos separados, `innerHTML` y `addEventListener`, sin librerías ni procesos de compilación.

## Recursos y pruebas

205 recursos referenciados: 49 PNG de escenas, tres GIF, 23 audios originales, 55 MP3 de Brian C. y 75 MP3 de Natalia. Los once MP3 originales de las intermedias se conservan como respaldo del narrador. También permanecen las fuentes de producción y Madre.png para la futura cinemática.

- `node tests/verificar.mjs`: 62 recorridos, ocho finales, puntos y límites, 75 pensamientos alcanzables, 205 recursos y cero grabaciones pendientes.
- `node tests/audio.mjs`: reproducción manual, pausa/reanudación, exclusión de voces, silencio, navegación, eventos anteriores y respaldo.
- Los 75 MP3 de Annie fueron decodificados sin errores. Los reportes de audio están en `docs/verificacion-audios-Annie.json` y `docs/verificacion-audios-BrianC.json`.

Las pruebas automáticas pasan. La comprobación visual de esta actualización en navegador y en teléfono físico queda pendiente porque la vista local no pudo abrirse en el entorno de revisión.

## Créditos y publicación

Los créditos del equipo se conservan en el juego. Narrador: Brian C. Voz interior de Annie: Natalia - Versatile. Voces generadas con ElevenLabs, con atribución `elevenlabs.io`. Las grabaciones de la prueba gratuita se destinan al uso no comercial con atribución.

Música: Sad Trio, Kevin MacLeod (incompetech.com), Creative Commons BY 4.0. Más información en `docs/recursos-sprint5.md`.

Para actualizar la publicación existente, seguí `docs/Actualizar_AURORA_en_GitHub.md`. Para consultar la historia y cronología ampliadas, leé `docs/Annie_historia_y_actualizacion.md`.
