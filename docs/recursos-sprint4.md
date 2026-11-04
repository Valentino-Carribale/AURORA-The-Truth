# Recursos multimedia - Sprint 4



## imágenes de escenas y música de fondo

Se integraron las 17 imágenes.

### Ubicación de las imágenes incorporadas

Todas las imágenes de esta tabla se encuentran en `assets/img/`.

| Archivo | Pantalla o situación |
| --- | --- |
| `01_elegir_postulacion.png` | Elegir empresa (`postulacion`) |
| `02_novasphere.png` | Primer día en NovaSphere (`primerDia`) |
| `03_northbio.png` | Llegada a NorthBio (`llegadaNorthBio`) |
| `04_sala_restringida.png` | Decisión frente a la sala (`salaRestringida`) |
| `05_investigar_mas.png` | Entrada después de investigar la sala (`tecnologiaEncontrada`) |
| `06_alejarse.png` | Propuesta de NorthBio, si se eligió alejarse |
| `07_tecnologia_neuronal_SOLO_FONDO.png` | Dispositivo neuronal (`dispositivoNeuronal`) |
| `08_inspeccionar_dispositivo.png` | Descubrimiento después de inspeccionar (`flujoAurora`) |
| `09_no_tocar_y_salir.png` | Propuesta, si se salió sin tocar el dispositivo |
| `10_transferencia_hacia_AURORA.png` | Decisión sobre la transferencia (`transferencia`) |
| `11_seguir_camino.png` | Propuesta, después de seguir el camino de los datos |
| `12_cerrar_sistema.png` | Propuesta, después de cerrar el sistema |
| `13_propuesta_AURORA_SOLO_FONDO.png` | Decisión del experimento (`experimento`) y fondo base de la propuesta |
| `14_aceptar_experimento_TRANSICION.png` | Aceptación en los finales 3 y 4 |
| `15_rechazar_prueba_TRANSICION.png` | Rechazo en los finales 6 y 7 |
| `16_FIN100_aceptar_despertar.png` | Despertar del final 5, con investigación completa |
| `17_FIN100_rechazar_epilogo.png` | Epílogo del final 8, con investigación completa |

En `js/db/escenas.js` se completaron las rutas de las imágenes correspondientes. En la pantalla compartida de propuesta, `cargarRecursos()` selecciona la ilustración de alejarse, salir, seguir o cerrar según los estados que ya registraba el juego. Los puntos, destinos y condiciones de los ocho finales se conservan.

Las escenas que todavía no tienen una imagen propia mantienen el espacio reservado.

### Formato del escenario

- El contenedor de imágenes mantiene una proporción de **16:9**, tanto en escritorio como en móvil.
- Se retiraron las alturas mínimas anteriores que forzaban un cuadro vertical.
- Las imágenes utilizan `object-fit: contain` para verse completas, sin recorte ni deformación.
- Las ilustraciones ya contienen a Annie donde corresponde. El cuadro vacío del personaje se oculta cuando hay una imagen de escena y no se configuró un personaje o una animación aparte. Al completar esos campos, vuelve a estar disponible.

### Música ambiental

Se incorporó el archivo:

`assets/sonido/The Lab - Sci-Fi Horror Ambient Music - Copyright and Royalty Free.mp3.mpeg`

El elemento `audio` está en `index.html`, fuera del contenedor que cambia de pantalla. Se reproduce en bucle a un volumen del 25 %, y la navegación no reinicia la pista.

La página intenta iniciar la música al cargar. Cuando el navegador bloquea la reproducción automática con sonido, se inicia con el primer clic, como Comenzar. El botón permanente **Silenciar música / Activar música** permite pausarla y reanudarla. Silenciarla se mantiene durante la navegación de esa sesión; no se agregó guardado persistente ni otra función de cuentas.


### Comprobaciones de estos recursos

- Se comprobaron las rutas y dimensiones de las 17 imágenes.
- Se verificó en navegador la imagen de postulación y las variantes de alejarse, salir sin tocar, seguir datos y cerrar sistema.
- Se verificaron las imágenes de la propuesta del experimento y la aceptación. Los finales de investigación completa tienen sus imágenes específicas en los datos.
- En escritorio, el cuadro midió aproximadamente 673 × 379 píxeles; en la vista de 320 píxeles, aproximadamente 281 × 158: ambas mantienen 16:9.
- Las vistas de 390 y 320 píxeles no presentaron desbordamiento horizontal.
- La pista comenzó después del primer clic, avanzó durante los cambios de escena y conservó la propiedad `loop` activa. También se comprobaron la pausa y la reanudación desde el botón.
