# Historia

Karel está jugando escondidillas en el parque con sus amigos
y ahora es su turno de esconderse. El parque
en el mundo de Karel es una fila con muchas paredes
que podrían servir de escondite, que se ven algo así:

![Ejemplo de parque](park.png)

# Problema

Ayuda a Karel a encontrar un escondite y apágalo ahí.
Karel piensa que un lugar bueno para esconderse es donde
haya una pared al oeste y al norte.

En caso de que hayan muchos lugares buenos para
esconderse, apaga a Karel en el que esté más al este,
para que sus amigos se tarden más en encontrarlo.

# Ejemplo

### Entrada

![Ejemplo de entrada](input.png)

### Salida

![Ejemplo de salida](output.png)

Aunque hay dos lugares buenos para esconderse
(marcados de amarillo), Karel se apaga en el más al
este.

# Consideraciones

* Karel empieza en la casilla (1,1).
* Karel empieza orientado al norte.
* Karel empieza sin zumbadores en la mochila.
* No hay zumbadores en el mundo.
* El mundo será rectangular.
* Las únicas paredes en el mundo son las del parque.
* El parque solamente está en la fila 1. Esto quiere decir que la fila dos siempre estará libre de obstáculos.
* El parque puede empezar entre las casillas (1,1) y (1,2).
* No importa la orientación final de Karel.
