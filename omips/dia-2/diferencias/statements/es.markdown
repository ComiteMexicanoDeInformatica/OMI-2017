# Historia

Mientras Karel trataba de descifrar el antiguo juego de pelota, del interior de la pirámide aparecieron varios guardianes que le dijeron que para poder llegar al acertijo final, necesitaba conocer la clave secreta. Karel no tenía la clave, pero la podía encontrar.

Karel sabe que la clave secreta es un número. Para obtener este número, necesita hacer lo siguiente:

1. Los guardianes están en la fila 1 del mundo y cada uno tiene un número.
2. Los números de los guardianes siempre son mayores o iguales al número del guardián anterior.
3. Karel debe visitar de izquierda a derecha a cada guardián y preguntar su número.
4. Con cada guardián, Karel deberá restar el número de ese guardián al número de cada guardián después de él y sumar los resultados para obtener la clave secreta.

Por ejemplo, según la imagen de abajo, cuando Karel visite al primer guardián, deberá restar el número del guardián 1 a los números de los guardianes 2, 3 y 4:

* 2-2=0
* 5-2=3
* 7-2=5

Cuando Karel visite al segundo guardián, deberá restar el número del guardián 2 a los números de los guardianes 3 y 4:

* 5-2=3
* 7-2=5

Y cuando Karel visite al tercer guardián, deberá restar el número del guardián 3 al número del último guardián restante:

* 7-5=2

Al último guardián no es necesario preguntarle nada pues no tiene más guardianes después de él.  

Al final deberás sumar todos los resultados para obtener la clave secreta y que te dejen pasar al acertijo final:

* 0+3+5+3+5+2=18

# Problema

Tu tarea es encontrar la clave secreta para poder avanzar al acertijo final y dejar ese número de zumbadores en la casilla (1,2).

# Ejemplo

### Entrada

![Ejemplo de entrada](entrada.png)

### Salida

![Ejemplo de salida](salida.png)


# Consideraciones

* Los números de los guardianes siempre son incrementales.
* Karel inicia en la fila (1,1) orientado al este.
* Karel tiene infinitos zumbadores en la mochila.
* No importa la posición ni orientación final de Karel.
* Solo se evalúa la cantidad final de zumbadores de la casilla (1,2).
* No importa si quedan más zumbadores en el mundo.
