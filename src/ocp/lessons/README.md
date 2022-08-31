# Open closed principle

Un modulo/clase deberia estar abierto para la **extensión** y cerrado para la **modificación**.

## Before

Se encontrara con una clase **AreaCalculator** que posee el metodo:

-   getAreas() : recibe un conjunto de **shapes** y calcula el area total.

### Problema

El metodo **getAreas()** internamente distingue entre las diferentes **shapes** que se le envian como parametro y por lo tanto su logica ha de ser modificada cada vez que se agrega una nueva **shape**.
Se nos ha pedido que agreguemos una nueva **shape**

## After

Identificado el causante del problema, el acoplamiento de **shapes** en el calculo del area, se procede a usar la **OOP** para permitir la extension y agregar nuevas **shapes** sin afectar el algoritmo de calculo de **getAreas()**
