# Liskov substitution principle

Si en un programa usamos cierta clase, deberiamos poder usar cualquiera de sus subclases sin afectar el funcionamiento.

## Before

Tenemos un conjunto de frutas (**Apple** y **Orange**) cada una de ellas tiene un metodo para devolvernos sus respectivos colores

_Apple_:

-   getColor() : Devuelve **Red**

_Orange_:

-   getMainColor() : Devuelve **Orange**

### Problema

No tenemos forma de reemplazar el funcionamiento de un programa cliente que use estas frutas y poder intercambiar **Orange** por **Apple**, o viceversa, sin tener que alterar la logica y algoritmia del programa cliente

## After

Se propone el uso de una _interfaz_, y de identificar logica comun entre **Apple** y **Orange**

