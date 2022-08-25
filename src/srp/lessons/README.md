# Single responsibility principle

Un modulo/clase deberia ser responsable de un, y solo un, **Actor**

## Before

Se encontrara con una clase **Employee** que pose los metodos:

-   calculatePay() : usado por el departamento contable
-   reportHours() : usado por el departamento de recursos humanos
-   save(): usado por el departamento del CTO (DBAs)

### Problema

El metodo **calculatePay()** y el metodo **reportHours()** comparten logica en comun, mediante el metodo privado **regularHours()**. Suponga que llega un pedido del _departamento contable_ para modificar el calculo de las horas regulares.
Esto seria acertado y completamente autorizado por el _departamento contable_, pero introduciria errores al _departamento de recursos humanos_ que no esta al tanto del pedido.

## After

Es conveniente identificar estos _Actores_, mantenerlos al tanto y hacerlos participe de los cambios a efectuar e introducir una mejor separacion de responsabilidad como la propuesta.
