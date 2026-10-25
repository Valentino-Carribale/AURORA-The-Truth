# AURORA: The Truth - Sprint 3

Primera versión de prueba. Incluye un recorrido de NovaSphere hasta el final de investigación inconclusa.

## Abrir el proyecto, igual que PokeApp

Descomprimí el ZIP y abrí la carpeta en VS Code. Con la extensión Live Server, hacé clic derecho en `index.html` y elegí Open with Live Server.


## Organización

- `index.html`: estructura y script de tipo `module`.
- `css/style.css`: diseño básico y los dos efectos CSS del sprint.
- `js/app.js`: variables, funciones, ciclos, condiciones, `querySelector`, `innerHTML` y eventos de clic.
- `js/db/escenas.js`: base de datos de contenido en un array de objetos, exportada e importada por `app.js`, como los catálogos de PokeApp. No es una base SQL ni necesita servidor de datos.
- `assets/img/`: espacio para las imágenes futuras.
- `assets/videos/`: espacio para la exportación de Adobe Animate.


## Recorrido implementado

Inicio → introducción → NovaSphere → investigar anomalías → guardar copias → revisar archivos ocultos → datos encubiertos → investigar al responsable → terminar la investigación → final de investigación inconclusa.

Las otras seis opciones siguen visibles y no hacen nada al pulsarlas, como se solicitó para esta versión. Cada pantalla conserva una opción que permite completar el recorrido. No se implementaron NorthBio ni otros finales.

## Variables y consecuencia

`investigacion` comienza en 0 y suma 10 al investigar anomalías, guardar copias, revisar los archivos e investigar al responsable. Termina en 40 y nunca aparece en la interfaz.

`empresaElegida` registra NovaSphere. `pruebasGuardadas` cambia a `true` al guardar y hace aparecer el texto «Conservás las copias de los registros que guardaste» en el informe. `estadoJuego` pasa por Inicio, En_Curso y Finalizado.

Comenzar reinicia las variables. No hay guardado local, cuentas ni funciones adicionales al prototipo.

## Dos efectos CSS

1. Hover/foco del botón: el fondo cambia suavemente para indicar la opción que estás señalando o seleccionando con el teclado.
2. Aparición del panel: al cambiar de pantalla, su contenido aparece con un fundido de 0,3 segundos.