# Registro de pruebas - Sprint 4

02/11/2026.

Recorridos hasta los ocho finales

Estuve probando los recorridos tanto en la lógica como en un navegador de escritorio por HTTP. Todos los paneles narrativos del medio los fui avanzando con "Continuar".

Prueba 1 | Elecciones: NovaSphere → investigar → guardar → revisar → aceptar explicación oficial | Resultado esperado: Final 1 (explicación oficial) | Resultado: Correcto.
Prueba 2 | Elecciones: NovaSphere → investigar → guardar → revisar → investigar responsable → terminar investigación | Resultado esperado: Final 2 (investigación inconclusa; se conserva el recorrido del Sprint 3) | Resultado: Correcto.
Prueba 3 | Elecciones: NorthBio → investigar sala → inspeccionar → seguir datos → aceptar | Resultado esperado: Final 3 (transferencia sin conocer toda la verdad) | Resultado: Correcto.
Prueba 4 | Elecciones: NovaSphere completa → alejarse de sala → aceptar | Resultado esperado: Final 4 (aceptación con información parcial) | Resultado: Correcto.
Prueba 5 | Elecciones: NovaSphere completa → investigar sala → inspeccionar → seguir datos → aceptar | Resultado esperado: Final 5 (AURORA: Awakening) | Resultado: Correcto.
Prueba 6 | Elecciones: NorthBio → investigar sala → inspeccionar → seguir datos → rechazar | Resultado esperado: Final 6 (rechazo sin conocer toda la verdad) | Resultado: Correcto.
Prueba 7 | Elecciones: NovaSphere completa → investigar sala → salir sin tocar → rechazar | Resultado esperado: Final 7 (rechazo con información incompleta) | Resultado: Correcto.
Prueba 8 | Elecciones: NovaSphere completa → investigar sala → inspeccionar → seguir datos → rechazar | Resultado esperado: Final 8 (huida con todas las pruebas) | Resultado: Correcto.
Prueba 9 | Elecciones: NovaSphere → ignorar anomalías → cerrar informe → alejarse en NorthBio → rechazar | Resultado esperado: Se llega a NorthBio y a su propuesta, sin cierre prematuro; final 6 | Resultado: Correcto.

Por "NovaSphere completa" me refiero a investigar anomalías, guardar copias, revisar archivos ocultos, investigar al responsable y guardar/seguir la pista de AURORA.

Variables y condiciones

Para la verificación de lógica corrí el mismo código de `app.js` con un documento simulado y fui comparando los destinos con una tabla aparte. Los archivos auxiliares de prueba no se cargan ni hacen falta para jugar.

* Revisé 191 estados de recorrido y 62 caminos completos.
* Se llegaron a cubrir las 33 pantallas: inicio, créditos, narrativas, decisiones y finales.
* Los diez nodos de decisión tienen exactamente dos opciones cada uno.
* La distribución de los recorridos quedó así: final 1 en 3, final 2 en 3, final 3 en 15, final 4 en 12, final 5 en 1, final 6 en 15, final 7 en 12 y final 8 en 1.
* Cada opción lleva al siguiente nodo previsto, pasando bien por sus paneles narrativos.
* La investigación suma 10 en cada acción de evidencia, menos al seguir la pista de AURORA que suma 30. El máximo real llega a 100.
* Empezar directo en NorthBio no pasa de 30.
* Los límites de 49/50 y 99/100 seleccionan el final que corresponde al aceptar y al rechazar.
* Los finales 1 y 2 no dependen de rangos y dejan la decisión del experimento como "Pendiente".
* Los estados de archivos, responsable, sala, dispositivo y transferencia van cambiando con la elección que tomes.
* Un evento que pertenezca a una escena anterior no vuelve a sumar puntos ni te cambia el destino actual.
* Al jugar otra vez se reinicia la investigación, la empresa, las copias, los estados, la decisión del experimento y el final al que llegaste.
* Tanto créditos como inicio tienen navegación funcional.

La puntuación solo la miré mientras probaba; no se imprime en la interfaz del jugador.

Interfaz y medios

* Escritorio a 1363 píxeles: el escenario queda a la izquierda y el panel narrativo a la derecha; el inicio tiene el título a la izquierda y la ilustración reservada a la derecha.
* Vistas de 390 y 320 píxeles: las columnas se apilan y el ancho del contenido se adapta al espacio disponible, sin desplazamiento horizontal.
* Ruta móvil hacia la sala de NorthBio: los botones quedan accesibles y sale el panel correcto.
* Cuadros sin rutas multimedia: se quedan vacíos y no cargan nada.
* Video recibido (activado solo en una página de prueba): reproducción silenciada del MP4 de unos cinco segundos.
* Imagen de prueba con ruta inexistente: se retira la etiqueta que falló y la navegación sigue su curso.
* Borrar las pruebas: el informe reconoce que ya no quedan copias para comparar.
* Texto de las propuestas: reconoce cuando te alejás, salís o cerrás el sistema.
* Hover/foco y aparición: conservados y adaptados al diseño.
* Consola en los recorridos normales: limpia, sin errores de JavaScript propios de la app.

La revisión de la vista móvil la hice probando con anchos angostos en el navegador de escritorio, no con teléfonos físicos. La prueba multimedia usó una página temporal que no va en el ZIP, así que la entrega mantiene sus campos de recursos vacíos.

Correcciones que hice

* Reemplacé los seis eventos vacíos del Sprint 3 y terminé de completar NorthBio.
* Saqué las etiquetas de "pendiente" en las opciones que ya están funcionando.
* Hice coincidir el HTML renderizado con las clases del CSS (las del panel, las opciones, el inicio y los finales).
* Acoté el círculo de elección únicamente a los botones de decisión; el botón de Inicio ahora tiene su propio estilo.
* Evité que se dupliquen las recompensas controlando bien la escena de donde vino el clic.
* Separé el cierre de la investigación del salto a la oferta de NorthBio para seguir bien los destinos del árbol.
* Dejé el valor correcto para los finales tempranos: el máximo del final 1 es 30 y el del final 2 es 40. La condición es la decisión tomada, no una cifra fija.