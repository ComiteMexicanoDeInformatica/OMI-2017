# Historia

Karel estaba jugando gallo gallina con su amigo zumbadorcito, pero sin querer se perdió en los pasillos de un castillo. Para poder encontrar a su amigo, Karel le pidió ayuda al Consejero Orientador Muy Inteligente (COMI).

Sus instruccciones fueron:

* Avanza derecho por el pasillo donde estás.
* Empiezas diciendo "gallo". Al momento de dar el primer paso, dices "gallina". Al dar el segundo, dices "gallo" y así en cada paso vas cambiando entre "gallo" y "gallina".
* Cuando tengas una pared enfrente debes de girar:
  * Si lo último que dijiste fue "gallo", giras a la derecha.
  * Si fue "gallina", giras a la izquierda.
* Después de girar vuelves a empezar diciendo "gallo".
* Repite estas instrucciones hasta que encuentres a zumbadorcito.

# Problema

Escribe un programa que ayude a Karel a encontrar a su amigo.

# Ejemplo

### Entrada:

![Ejemplo de entrada](entrada.png)

### Salida:

![Ejemplo de salida](salida.png)

En este ejemplo karel hizo lo siguiente:

"gallo" "gallina" "gallo" "gallina" "gallo" **derecha**

"gallo" "gallina" "gallo" "gallina" "gallo" **derecha**

"gallo" "gallina" "gallo" "gallina" **izquierda**

"gallo" "gallina" "gallo" "gallina" **apagate**

# Consideraciones

* Karel inicia al principio del recorrido orientado hacia donde tiene que avanzar.
* Karel no tiene zumbadores en la mochila.
* Los pasillos del castillo son muy angostos, y se representan con un camino de 1 casilla de ancho (como se muestra en el ejemplo).
* Karel debe de apagarse al encontrar el zumbador.
* **Si no sigues las instrucciones o das una vuelta incorrecta no obtendrás puntos aunque llegues al zumbador**.
* Si al enviar tu código te sale `Error de ejecución`, es porque chocaste contra una pared por no seguir con cuidado las instrucciones.
