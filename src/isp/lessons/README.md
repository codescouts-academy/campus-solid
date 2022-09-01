# Interface segregation Principle

Haz interfaces que sean especificas para un tipo de cliente.

## Before

Tenemos un grupo de aves (**Penguin** y **Parrot**) que implementan un interfaz comun _IBird_ con los metodos:

-   Fly() : Devuelve **I Can Flyyy!!**
-   Swim() : Devuelve **I can Swiiiiim!!!**

### Problema

La clase **Penguin** no puede implementar el metodo _Fly()_ por lo tanto devuelve un **error**, al igual que la clase **Parrot** no puede implementar el metodo _Swim()_ por lo tanto devuelve un **error**. El problema es que estos metodos son accesibles desde una clase cliente que puede desconocer esto, y por lo tanto, puede derivar en su fallo.

## After

Se divide la interfaz **IBird** y se crean las interfaces:
- **IFlyingBird**: Implementada por **Parrot**
- **ISwimmingBird**: Implementada por **Penguin**

Esto evita posibles errores en los programas clientes que hagan uso de estas clases y sus metodos

