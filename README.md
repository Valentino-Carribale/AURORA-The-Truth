# AURORA: The Truth - Sprint 4

Versión avanzada jugable, todavía en desarrollo. Están implementados los diez nodos de decisión y los ocho finales. La interfaz se acerca a los mockups y deja vacíos los espacios para escenarios, personajes y animaciones.

## Abrir el proyecto

Como en PokeApp y en el Sprint 3: descomprimí el ZIP, abrí la carpeta en VS Code y ejecutá `index.html` con **Open with Live Server**. Los módulos `import` y `export` necesitan un servidor local; no se abre con doble clic desde `file://`.

No hay instalación de paquetes, compilación, cuentas ni guardado persistente. Inicio vuelve al menú y Comenzar reinicia todas las variables. Al recargar la página se vuelve a empezar, de acuerdo con el alcance del Sprint 4.

## Organización conservada

- `index.html`: cabecera, contenedor de pantallas y pie.
- `css/style.css`: composición, colores, botones, adaptación a móvil y efectos de interfaz.
- `js/app.js`: variables, estados, renderizado, eventos y condiciones de finales.
- `js/db/escenas.js`: array de objetos exportado con los textos, opciones y rutas multimedia.
- `assets/img/`: imágenes a incorporar por el equipo.
- `assets/videos/AnnieAnimacion1.mp4`: video de prueba recibido, conservado sin modificar.
- `docs/`: pruebas, avance, recursos pendientes y registro histórico del Sprint 3.

La carpeta `sprints` se conserva sin modificar en el ZIP y no se utilizó para el desarrollo de esta actualización.

## Cómo está programado

Se mantiene el enfoque de la versión anterior: `import`/`export`, arrays, objetos, `const`/`let`, ciclos, condicionales, `querySelector`, `innerHTML` y `addEventListener("click", function () { ... })`.

`mostrarEscena(id)` busca un objeto en la base de datos y escribe su HTML. Después, una función `iniciar...` conecta los botones de esa pantalla. Por ejemplo, `iniciarRegistros()` conecta Guardar y Borrar. Los paneles narrativos tienen una sola continuación; las diez decisiones tienen dos opciones funcionales.

Los puntos y estados permanecen dentro de JavaScript. Las consecuencias se muestran con textos que reconocen lo elegido, por ejemplo conservar o borrar copias, cerrar un informe o salir sin inspeccionar un dispositivo. Las condiciones de los seis finales de NorthBio se concentran en `determinarFinal()`. Los finales de NovaSphere se activan por sus decisiones específicas.

Para localizar una escena, buscá su `id` en `escenas.js` y su función `iniciar...` en `app.js`. No hay un motor externo ni una librería de juego.

## Recorridos y finales

Ahora funcionan también las opciones que antes figuraban como pendientes:

- Ignorar anomalías lleva a la limpieza y al informe.
- Borrar pruebas permite seguir, reconociendo que ya no hay copias.
- Cerrar el informe lleva a una nueva postulación y después a NorthBio.
- Aceptar la explicación oficial termina en el final 1.
- Terminar la investigación de AURORA conserva el final 2 del Sprint 3.
- Seguir la pista conecta NovaSphere con la sala restringida de NorthBio.
- Alejarse, salir sin tocar el dispositivo o cerrar el sistema lleva a la propuesta, sin inventar un final anticipado.
- Aceptar o rechazar el experimento lleva a uno de los seis finales de NorthBio según la investigación reunida.

Los ocho resultados fueron alcanzados en el navegador. El registro detallado está en [docs/pruebas-sprint4.md](docs/pruebas-sprint4.md).

## Agregar recursos sin cambiar la lógica

Cada objeto de `escenas.js` tiene tres campos inicialmente vacíos:

```js
imagen: "",
personaje: "",
animacion: "",
```

Al disponer de archivos, completá las rutas en las escenas correspondientes. Por ejemplo, para probar el video recibido en Registros alterados:

```js
imagen: "",
personaje: "",
animacion: "./assets/videos/AnnieAnimacion1.mp4",
```

`imagen` usa el cuadro grande de escenario, `personaje` el cuadro de Annie y `animacion` reproduce un MP4 en ese mismo cuadro. Si hay animación, tiene prioridad sobre la imagen de personaje. Se reproduce una vez, silenciada, sin controles y al entrar a la escena. Las rutas vacías no crean etiquetas de medios ni piden archivos inexistentes.

Los recursos que no pueden cargarse se retiran y el cuadro queda vacío; esto no impide continuar. Si un navegador bloquea la reproducción automática, las decisiones siguen disponibles. Se puede usar PNG/JPG/GIF en los campos de imagen. Para producción, probar el formato final en los navegadores del equipo.


## División del trabajo

Tomás Barcudi: Producción de recursos visuales.

Agustín Perriello: Producción e ideación de la Animaciónes.

Valentino Carribale: Redacción, organizacion y producción de recursos de Sprint 4

Agustín Bianchi: Programación, corrección y pruebas en WebApp de Sprint 4



## Documentación del sprint

- [Pruebas y correcciones](docs/pruebas-sprint4.md).
- [Avance y tareas pendientes](docs/avance-sprint4.md).
- [Recursos y escenas previstas](docs/recursos-sprint4.md).
- [Registro del Sprint 3](docs/registro-sprint3.md), conservado como historial; sus opciones pendientes ya están implementadas en esta versión.

