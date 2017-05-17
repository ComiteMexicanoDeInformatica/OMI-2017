# Historia

Karel tiene que ir a su casa, pero de camino a casa tiene que atravesar un callejón.
Al pasar por este callejón Karel se encuentra con unos bandidos que quieren robarle sus pertenencias. Como Karel es muy valiente ha decidido enfrentarse a ellos uno por uno hasta quedarse sin fuerza, aunque eso no sea la mejor decisión.

Para ganar la batalla con un bandido, Karel debe tener en ese momento una fuerza mayor o igual a la fuerza del bandido.

# Problema

Ayuda a Karel a luchar con cada uno de los bandidos, hasta que se quede sin fuerza o haya derrotado a todos los bandidos.

# Ejemplo

### Entrada

![Ejemplo de entrada](bandidos-entrada.png)

### Salida

![Ejemplo de salida](bandidos-salida.png)

En este caso Karel empieza con una fuerza de 10. Después de luchar con el primer bandido Karel queda con una fuerza de 6. Después de luchar con el segundo bandido Karel queda con una fuerza de 4. Después de derrotar al tercer bandido Karel queda con una fuerza de 1, la cual no es suficiente para derrotar al cuarto bandido que tiene fuerza 2, entonces Karel se coloca en la posición 3 y se apaga ahí.

# Consideraciones

* Karel inicia al principio del callejón orientado al este.
* La fuerza incial de Karel está definida por el número de zumbadores que tiene en su mochila.
* Karel tendrá suficiente fuerza para derrotar por lo menos a un bandido.
* El callejón está representado por un rectángulo de una casilla de ancho.
* En cada casilla hay un montón de zumbadores que indica la fuerza de ese bandido. Las casillas vacias también representan bandidos en el callejón, la fuerza de dichos bandidos es de 0.
* Cuando Karel derrota a un bandido, pierde la misma cantidad de fuerza que la que tenía el bandido. Por ejemplo, si Karel empieza con una fuerza de 10 y lucha con un bandido de fuerza 4 , Karel queda con una fuerza de 10 - 4 = 6.
* No importa la cantidad de zumbadores en el mundo, sólo importa la posición final de Karel.
