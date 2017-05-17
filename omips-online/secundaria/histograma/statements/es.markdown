# Historia

Karel fue recientemente contratado por la Organización de Pasteleros y Reposteros Alegres (OMIPS... en ese idioma que... tú sabes) y se le dió la importante tarea de llevar un conteo de los pasteles favoritos de la gente. 

Karel se encargó de graficar los resultados mediante el uso de barras para saber cuántas personas elegieron los diferentes tipos de pasteles como el que más les gusta. Entre más personas digan que un tipo de pastel es el que más les gusta, más alta será la barra correspondiente. Aquello que Karel hizo recibe el nombre de histograma. 

Por ejemplo, supongamos que 3 personas dicen que su favorito es el de chocolate, 4 que el de vainilla y otras 2 que el de cajeta. El histograma correspondiente a esta situación es el siguiente.

![Ejemplo Histograma](Ejemplo.png)

# Problema

Karel se quedó dormido y el Comité de Personas Odiadoras de Pasteles (o COMI, por sus siglas en... otro idioma) entró a su casa a robar el histograma. Tu tarea es ayudar a Karel a reconstruirlo conociendo los pasteles favoritos de la gente. 

## Entrada

A lo largo de la fila 1 del mundo de Karel tendrás las respuestas de la gente representadas por montones de zumbadores. Un montón de 1 zumbador signfica que de alguien su favorito es el pastel 1, un montón con 2 zumbadores es que de alguien su favorito fue el pastel 2, ... , un montón con $n$ zumbadores es que de alguien su favorito fue el pastel $n$. Ya que Karel es un desordenado de primera, las respuesta están dispersas y puede haber huecos sin zumbadores entre ellas. 

## Salida

Debes de dar el histograma correspondiente a las respuestas de la gente. La barra del pastel $n$ debe colocarse en la columna $n$ del mundo de Karel siendo su altura igual a la cantidad de personas tal que su favorito es el pastel $n$. Las barras deben ser construidas con montones de 1 zumbador.

# Ejemplo

### Entrada

![Ejemplo Entrada](EjemploEntrada.png)

### Salida

![Ejemplo Salida](EjemploSalida.png)

### Explicación

Si el pastel de Chocolate fuera el pastel 1, el de vainilla el 2, y el de cajeta el 4, tenemos el ejemplo explicado anteriormente.

# Consideraciones

* Karel inicia en la (1,1) orientado al norte.
* Karel empieza sin zumbadores en la mochila.
* Los números de pastel están entre 1 y 100.
* Por dificil que sea de creer, cada persona tiene un único pastel favorito.

# Subtareas

### Subtarea 1 (20 puntos)

* Todas las personas darán el mismo pastel como su pastel favorito.

### Subtarea 2 (20 puntos)

* Para cada pastel, a lo más una persona dirá que es su favorito.
