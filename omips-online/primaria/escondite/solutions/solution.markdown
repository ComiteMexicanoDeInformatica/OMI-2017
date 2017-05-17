# **Escondite**

## **Solución**


Lo que nos pide el problema es encontrar el escondite mas al este. Para eso comenzaremos buscando
de derecha a izquierda, así que lo primero es llegar al fondo. 

Para empezar veamos como llegar a la segunda fila. Veamos el siguiente caso:

![Primer Bloqueado](/Imgs/primer_bloqueado.jpg)

Como podemos tener el principio bloqueado, lo que haremos es orientarnos al este y avanzar hasta
tener nuestra izquierda libre o hasta que no podamos avanzar más.

Si nunca tuvimos la izquierda libre y llegamos a una pared, quiere decir que no podemos salir.

![Imposible salir](/Imgs/imposible_salir.jpg)

En ese caso la solución es regresar a la casilla (1,1) y apagarse.

![Regresando a 1 1](/Imgs/regresando_a_1_1.jpg)

Pero si en algun momento tenemos la izquierda libre, sólo debemos orientarnos al norte y avanzar para salir
a la fila 2.

![Izquierda libre](/Imgs/izquierda_libre.jpg)

ahora solo hay que orientarse al este y avanzar hasta llegar a la pared. 

Existen dos casos:

1. La última casilla del parque está libre.
    
    ![Ultima libre](/Imgs/ultima_libre.jpg)

    Este caso es sencillo porque lo único que hay que hacer es orientarse al sur y avanzar.

2. La última casilla del parque está bloqueada.
    
    ![Ultima bloqueada](/Imgs/ultima_bloqueada.jpg)

    Si esto pasa deberemos orientarnos al oeste y avanzar hasta que karel tenga su izquierda libre.

    ![Ultima bloqueada 2](/Imgs/ultima_bloqueada_izquierda_libre.jpg)

    ahora lo único que hay que hacer es orientarse al sur y avanzar.

Hasta ahora ya nos hemos posiciando correctamente, sólo falta buscar el primer escondite avanzando de
derecha a izquierda. Para eso avanzaremos siempre y cuando no tengamos una pared enfrente.

Después de avanzar si tenemos la derecha bloqueada (como en el siguiente ejemplo)
entonces llegamos a nuestro destino y debemos apagarnos.

![Escondite bueno](/Imgs/escondite_bueno.jpg)

Pero si no es así entonces tendremos que rodear la bardita. Para eso nos orientamos al norte, avanzamos,
giramos a la izquierda y volvemos a avanzar.

![Saltar 1](/Imgs/primera_parte_saltar_barda.jpg)

Ahora deberemos avanzar hasta tener la izquierda de karel libre. Para poder orientarnos al sur y avanzar para comenzar el proceso nuevamente.

![Saltar 2](/Imgs/segunda_parte_saltar_barda.jpg)

Esto se repetirá hasta que encontremos un escondite donde deberemos apagarnos.

![Escondite 2](/Imgs/escondite_bueno_2.jpg)
