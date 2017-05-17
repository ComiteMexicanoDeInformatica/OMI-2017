# Historia

Como todos sabemos, Karel es muy competitivo y este año organizará un torneo con todos sus amigos.

Para los preparativos, Karel necesita saber el tamaño del terreno donde realizará las actividades y, para no confundirse, ha decidido recorrer todas las filas de izquierda a derecha, empezando por la fila de hasta abajo y terminando con la de hasta arriba, numerando cada una de las casillas.

# Problema

Tu tarea es ayudarlo a recorrer el terreno y a numerar cada casilla.

La casilla (1,1) siempre tendrá el número 1, y cada casilla nueva que visites deberá tener 1 zumbador más que la casilla anterior. Cuando llegues a la pared de la derecha, deberás comenzar a contar nuevamente desde la casilla de la izquierda de la siguiente fila hacia arriba.

# Ejemplo

### Entrada

![Ejemplo de entrada](entrada.png)

### Salida

![Ejemplo de salida](salida.png)


# Consideraciones

* El terreno es un rectángulo delimitado por paredes.
* Karel inicia en la casilla (1,1) orientado al este.
* Karel tiene infinitos zumbadores en la mochila.
* No existen paredes internas ni zumbadores dentro del terreno.
