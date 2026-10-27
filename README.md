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


## Registro de Pruebas WebApp

Registro breve de pruebas - 23/10/2026

Carga con el servidor local: app.js importa bien escenas.js y arranca en Inicio. Correcto.

Recorrido completo: llegué hasta investigación inconclusa sin problemas. Correcto.

NorthBio (ignorar, borrar, cerrar, aceptar la explicación y seguir la pista): se queda en la misma pantalla y no toca las variables. Correcto.

Investigación: los valores internos suben bien de 0 a 10, 20, 30 y 40. Correcto.

Guardar copias: el estado queda en verdadero y se ve la consecuencia en el informe. Correcto.

Terminar investigación: pasa a Finalizado y da un solo final. Correcto.

Volver y empezar de nuevo: reinicia las variables como corresponde. Correcto.

Cuadros de imágenes: quedan vacíos y no aparecen imágenes rotas. Correcto.

CSS: el cambio de fondo en los botones y la aparición del panel ya están implementados.

El recorrido y los botones los revisé en el navegador por HTTP. Las variables las comprobé ejecutando el mismo código con un documento, sin meter herramientas de prueba en el proyecto.


## Registro de pruebas Animación (NO DEFINITIVA PARA SU USO EN EL JUEGO)

Calcado de imagen provista por IA en Ilustrator

Separación en capas para su posterior coloración y animación.

Animación basica hecha en Adobe Anímate

Carga de la Animación en el Repositorio 


## División del trabajo

Tomás Barcudi: Revisión de Sprint 3

Agustín Perriello: Producción e ideación de la Animación de prueba de Annie

Valentino Carribale: Redacción y mejoras en animación Sprint 3

Agustín Bianchi: Programación, corrección y pruebas en WebApp de Sprint 3
