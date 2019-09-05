# Justificación

**Integrantes:**
 - Juan David Arboleda
 - Valentina Vega
 
## División de componentes (div)

- **content:** Es el contenedor base que se va a encargar de centrar la pantalla principal cuándo se visualice en desktop.
- **display:** Es el contenedor que va tener a todos los otros componentes propios del reproductor y se divide a su vez en otros 3 para organizar la interfaz por header, image, options y footer.
- **header:** Es el contenedor que organizar los botones superiores del reproductor. Aquí se encuentran los botones de menú y buscar. Además este contenedor se va a tener una ubicación fixed para que los botones puedan ubicarse encima de la imagen del medio y a cada lado del nombre.
- **contentImg:** Es el que va a tener la imagen representativa de la banda, y la encargada de ubicarla y ajustar el tamaño con respecto al display.
- **options:** El encargado de organizar tanto la información de la canción (título y sub título) como los botones para manipular el audio (atrasar, reproducir, retroceder y pausar). 
- **footer:** Es el contenedor que organiza los botones inferiores de la pantalla de reproducción. Va a tener una dirección por columnas.

## Flexbox

Se escogió debido a que el diseño se podría facilitar mediante el uso de éste. Descartamos el grid debido a que no es un diseño que necesite división por cuadrícula ya que no cuenta con tantos componentes a organizar, ni diferentes áreas que asignar, por lo tanto se pueden realizar mediante cajas sin necesidad de una ubicación específica (se puede dividir en secciones que van una abajo de otra) y con las funciones propias de este tipo de display podemos ubicar fácilmente nuestros componentes en la ubicación deseada.