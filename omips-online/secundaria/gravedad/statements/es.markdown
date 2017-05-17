# Historia

Karel quiere estudiar los efectos de la gravedad sobre los zumbadores de su mundo y para esto puso una serie de zumbadores distribuidos sobre un mundo rectangular.

En cada columna del mundo puede haber una serie de zumbadores. Al aplicarles la gravedad se caerán hasta las filas de abajo siguiendo la siguientes reglas:

* Los zumbadores de cada columna que estén juntos se caerán en un solo montón de zumbadores.
* El montón llegará hasta la fila mas baja que aún no tenga zumbadores.

# Problema

Ayuda a Karel a simular los efectos de la gravedad en los zumbadores del mundo.

Escribe un programa que recorra el mundo de Karel y "tire" los zumbadores con las reglas definidas.

# Ejemplos

### Entrada

![Ejemplo de entrada](sampleIn1.png)

El mundo inicial siempre tiene solo montones de 1 zumbador.

### Salida

![Ejemplo de salida](sampleOut1.png)

Observa como en la columna 3, los 6 zumbadores están separados por un espacio, por lo que al caerse se convierten en 2 montones de 3 zumbadores cada uno.

# Consideraciones

*  Karel empieza en la casilla (1,1) orientado al norte.
*  No hay paredes dentro del mundo de Karel, solo las que lo rodean.
*  Karel empieza sin zumbadores en la mochila.
*  No importa la posición final de Karel.
