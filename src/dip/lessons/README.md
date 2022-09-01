# Dependency inversion principle

Depende de abstracciones, no de clases concretas

## Before

Tenemos una clase **ShoppingBasket** que hace uso de una clase **SqlDatabase** para guardar una compra y tambien hace uso de una clase **CreditCard** para realizar el pago

_SqlDatabase_:

-   save() : Guarda una compra en la DB SQL

_CreditCard_:

-   pay() : Realiza el pago de una compra con Tarjeta de Credito

### Problema

Se quiere que la clase **ShoppingBasket** realice el guardado en una _DB Mongo_ y que se realice el pago en _Efectivo_

## After

Se procede a remove las dependencias concretas en favor de dependencias abstractas **Persistence** y **Payment** (interfaces)

