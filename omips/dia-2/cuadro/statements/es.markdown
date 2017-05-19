# Historia

¡Por fin Karel ha llegado al acertijo final!

Estás a punto de ayudar a Karel a convertirse en el primer explorador de la historia capaz de resolver el mítico acertijo del templo escondido.

El acertijo es una especie de caja fuerte protegida por un cuadro mágico. Este cuadro es un mundo de Karel de 5x5 rodeado por paredes y lleno de montones de zumbadores. El cuadro es mágico pues, una vez resuelto el acertijo, cada fila, cada columna y cada diagonal del cuadro sumarán 65.

Obviamente, Karel está frente a un cuadro mágico desordenado y para ordenarlo debe girar los "anillos" del cuadro hasta que todas las filas, columnas y diagonales sumen 65.

# Problema

Ayuda a Karel a convertirse en el mejor explorador de la historia resolviendo el mítico acertijo del cuadro mágico.

Para resolverlo Karel puede girar el anillo exterior del cuadro mágico hacia un lado o hacia otro, por ejemplo, girando el anillo hacia la derecha:

![Anillo exterior](exterior.png) &nbsp; &nbsp; &nbsp; &nbsp; ![Cuadro resuelto](resuelto.png)

O girar el anillo interior hacia un lado o hacia otro, por ejemplo, girando el anillo interior hacia la izquierda:

![Anillo exterior](interior.png) &nbsp; &nbsp; &nbsp; &nbsp; ![Cuadro resuelto](resuelto.png)

El montón de zumbadores del centro del cuadro mágico nunca se mueve.

Karel debe ordenar el cuadro mágico solo haciendo giros a la derecha o izquierda en estos anillos, pero no puede alterar la cantidad de zumbadores de un montón, es decir, al final en el mundo deben estar los mismos montones de zumbadores que al inicio pero en el orden correcto.

# Ejemplo

### Entrada

![Ejemplo de entrada](entrada.png)

### Salida

![Ejemplo de salida](salida.png)


# Consideraciones

* Karel inicia en la casilla inferior izquierda (1,1).
* Karel inicia orientado al norte.
* Karel tiene 0 zumbadores en su mochila.
* El cuadro mágico siempre mide 5x5.
* Los números del cuadro mágico siempre irán del 1 al 25.
* Si hay más de una solución, cualquiera te dará puntos.
* Solo puedes girar los anillos, nunca alterar la cantidad de zumbadores de un montón.
* No importa la orientación ni posición final de Karel.
* El cuadro está resuelto cuando todas las filas, columnas y diagonales sumen 65.
