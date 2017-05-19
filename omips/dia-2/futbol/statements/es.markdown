# Historia

Para celebrar el éxito del torneo de Karel, él y sus amigos decidieron organizar un día de campo y lo iniciaron jugando unas rondas de penales. 

El número de rondas a jugar se encuentra indicado en la casilla (1,1) del mundo, y los resultados de las rondas se muestran a partir de la fila 3, poniendo un zumbador en la primer columna si el equipo 1 metió un gol (o ningúno si no metió un gol) en esa ronda, y un zumbador en la segunda columna si el equipo 2 metió un gol (o ningúno si no metió un gol) en esa ronda. Los resultados de la ronda 2 se muestran en la siguiente fila hacia arriba, o sea, en la fila 4, los resultados de la ronda 3 se muestran en la fila 5 y así sucesivamente. Cada equipo tiene la oportunidad meter un solo gol por ronda.

En algunos partidos, se puede saber quién era el equipo ganador antes de que se jugaran todas las rondas. Por ejemplo, en un juego de 5 rondas, si en la ronda 3 iban 3-0, esto quería decir que aunque el equipo 2 metiera los 2 goles restantes y el equipo 1 no metiera ninguno más, terminarían 3-2 y de todas formas ganaría el equipo 1. En este momento, los jugadores habrían dicho que, aunque faltaran 2 rondas, el equipo 1 ya era el ganador.

# Problema

Debes ayudar a Karel a identificar en sus resultados en qué momento de los penales uno de los equipos ya había ganado.

Para ello, deberás apagarte en el tiro en el que se decidió el resultado del partido de acuerdo a la explicación anterior.

Si al finalizar las rondas los equipos tuvieran la misma cantidad de goles, entonces deberás apagarte en la columna 3, al lado derecho del último resultado.

# Ejemplo

### Entrada

![Ejemplo de entrada](entrada.png)

### Salida

![Ejemplo de salida](salida.png)

# Consideraciones

* Karel inicia en la casilla inferior izquierda (1,1).
* Karel inicia orientado al norte.
* Karel tiene infinitos zumbadores en su mochila.
* Las únicas paredes son las que delimitan el mundo.
* Karel inicia sobre un montón de zumbadores que indica la cantidad de rondas que se jugaron.
* Los resultados del equipo 1 están en la columna 1, de la casilla 3 hacia arriba.
* Los resultados del equipo 2 están en la columna 2, de la casilla 3 hacia arriba.
* Si el tiro fue gol, habrá un zumbador en la casilla, si no fue gol, estará vacía.
* No importa la orientación final de Karel.
* No importa cómo queden los zumbadores al final.
* Sólo se evaluará la posición final de Karel.
* Karel se debe apagar sobre la columna del equipo ganador en el turno decisivo.
* Si los equipos empatan, Karel se debe apagar sobre la columna 3, a la derecha del último tiro.
* Los casos están agrupados en pares.
