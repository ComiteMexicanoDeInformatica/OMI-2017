# Historia

Para finalizar su día de campo, Karel y sus amigos jugarán boliche.

Para jugar boliche es necesario encontrar una "línea" que no haya sido usada antes. Las líneas que no se han usado son las que tienen un zumbador al final; por otro lado, las líneas que ya se usaron no tienen ningún zumbador.

# Problema

Las líneas de boliche se encuentran en un mundo rectangular donde todas las columnas están separadas por paredes verticales a partir de la fila 2. La única pared de la fila 1 es la que delimita el mundo.

Las líneas de boliche siempre se utilizan de izquierda a derecha, tu tarea es ayudar a Karel a encontrar la primer línea no utilizada (la que esté más a la izquierda) en la que Karel y sus amigos puedan jugar.

Deberás apagarte justo sobre el zumbador de esa línea.

Se te calificará dependiendo de cuántas instrucciones avanza, gira-izquierda, deja-zumbador y coge-zumbador hayas usado. Entre menos uses, más puntos obtendrás.

# Ejemplo

### Entrada

![Ejemplo de entrada](entrada.png)

### Salida

![Ejemplo de salida](salida.png)

# Consideraciones

* Karel inicia en la casilla inferior izquierda (1,1).
* Karel inicia orientado al este.
* Karel tiene infinitos zumbadores en la mochila.
* Todas las columnas están separadas por paredes verticales, excepto en la fila 1.
* Para obtener puntos, Karel debe apagarse encima del zumbador que está más a la izquierda.
* No importa la orientación final de Karel.
* Mientras menos instrucciones utilices, más puntos obtendrás.
