# Justificación

**Integrantes:**
 - Juan David Arboleda
 - Valentina Vega

## Bocetos

 
## División de componentes (div)

- **content:** Es el contenedor base que se va a encargar de centrar la pantalla principal cuándo se visualice en desktop.
- **display:** Es el contenedor que va tener a todos los otros componentes propios del reproductor y se divide a su vez en otros 3 para organizar la interfaz por header, image, options y footer.
- **header:** Es el contenedor que organizar los botones superiores del reproductor. Aquí se encuentran los botones de menú y buscar. Además este contenedor se va a tener una ubicación absoluta para que los botones puedan ubicarse encima de la imagen del medio y a cada lado del nombre de la banda.
- **contentImg:** Es el que va a tener la imagen representativa de la banda, y la encargada de ubicarla y ajustar el tamaño con respecto al display.
- **options:** El encargado de organizar tanto la información de la canción (título y sub título) como los botones para manipular el audio (atrasar, reproducir, retroceder y pausar). 
- **footer:** Es el contenedor que organiza los botones inferiores de la pantalla de reproducción. 

## Flexbox

No se escogió debido a que para llevar a cabo el diseño, serían necesarias más cajas (div) para poder ubicar cada elemento en la posición deseada. A pesar de esto, podría se una opción viable en cuánto a que no hay tantos componentes a organizar, por lo que podemos depender del orden del html (se puede dividir en secciones que van una abajo de otra) con ayuda de cajas de apoyo, encargadas de ubicar finalmente el componente en su sitio, ya sea centrar o enviar a un extremo. Con las funciones propias de este tipo de display y con las cajas necesarias podemos lograr la ubicación deseada cómo se plantea en el boceto.

## Grid

Finalmente este tipo de display, nos propone una mejor opción al simplificar el diseño con sólo las cajas necesarias. También nos presenta un ventaja en cuánto a no depender del orden del html gracias a la asignación de áreas donde podemos ubicar fácilmente nuestras cajas. Mediante la creación de columnas y filas con tamaños predefinidos podemos obtener la posición deseada de forma más sencilla y directa sin intervención de cajas de apoyo, con sólo centrar y ubicar las div en cada una de ellas, permitiendo a su vez que cada componente individual pueda contar con su propio tamaño o adaptarse a la fila o columna a la que pertenece.
