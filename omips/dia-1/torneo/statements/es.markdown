# Historia

Para determinar el ganador del torneo, Karel ha ideado un sistema de eliminación.

En este sistema todos los concursantes están puestos en parejas en la fila 1 del mundo. Cada concursante tiene en su casilla un montón de zumbadores con los puntos que ha ganado en el torneo, y pasa a la siguiente ronda (es decir, sube a la fila 2) el concursante que tenga más puntos.

Una vez que los concursantes han pasado a la ronda 2, se vuelven a agrupar en parejas y se vuelven a comparar sus puntos. El que tenga más puntos de cada pareja pasa a la ronda 3 (es decir, a la fila 3) y así sucesivamente hasta que quede un ganador absoluto.

Si uno de los concursantes no tiene pareja, pasa automáticamente a la siguiente ronda (¡yei!).

# Problema

Deberás ayudar a Karel a dibujar la tabla final de resultados, mostrando en el mundo hasta qué ronda llegó cada concursante.

# Ejemplo

### Entrada

![Ejemplo de entrada](entrada.png)

### Salida

![Ejemplo de salida](salida.png)


# Consideraciones

* Karel inicia en la casilla inferior izquierda (1,1).
* Karel inicia orientado al norte.
* Karel inicia sobre el primer concursante del torneo.
* Karel tiene infinitos zumbadores en su mochila.
* No hay espacios entre los concursantes.
* Las parejas de concursantes se forman de izquierda a derecha.
* No habrá más de un concursante con el mismo número de puntos.
* Si un concursante queda sin pareja, automáticamente pasa a la siguiente ronda.
* En el mundo deben estar los resultados de cada ronda hasta el ganador.
* No debe haber otros zumbadores en el mundo.
* No importa la orientación ni la posición final de Karel.
* Las únicas paredes en el mundo son las que lo delimitan.
