# JavaScript
## Codigo
## Codigo
### Manejo basico de datos
* Impresion basica de datos
console.log('Hola mundo')

* Recepcion basica de datos
prompt()

### Variables
Direccion en memoria el cual puede ser reasignado
* Sintaxis

  * `let`

    let nombre= 'Paul'

  * `var`
      var nombre= 'Paul'

### Constante
Direccion en memoria el cual no puede ser reasignado. La ventaja es que el programa sabe exactamente cuanto espacio de la memoria que necesita para almacenar el dato.

* Sintaxis

  * `const`

    const pi= 3.1416

### Operaciones Aritmeticas
#### Operadores Aritmeticos
 * Suma: `+` 
 * Resta: `-`
 * Muliplicacion: `*`
 * Division: `/`
 * Modulo: `%`
 
 #### Libreria Math
 
 * Valor de pi: `Math.PI`
 * Funcion Exponencial: `Math.pow(10,2)`
 * Redondear: `Math.round(5.6))`
 * Raiz Cuadrada: `Math.sqrt(4)`

 [Mas sobre la libreria Math](https://www.w3schools.com/js/js_math.asp)

### Tipos de datos
#### Booleanos
Para conocer el valor booleano de una variable

```
let variable = ""
let booleano = new Boolean(variable)
```
`Los valores cuyo version booleana es falsa son :
undefined, NaN, null, 0, -0, "", false`

### Operaciones de comparaciones

* Operador de igualdad sin la comparacion del tipo de dato : `==`
* Operador de igualdad tomando en cuenta el tipo de dato : `===`
* Operador de desigualdad sin la comparacion del tipo de dato : `!=`
* Operador de deigualdad tomando en cuenta el tipo de dato : `!==`
* Operador mayor o igual : `>=`
* Operador menor o igual : `<=`
* Operador mayor : `>`
* Operador menor : `<`

### Operaciones Logicas
* Operador Y `&&`: Devuelve verdadero unicamente si todas las expreciones consideradas devuelven verdadero

* Operador O `||`: Devuelve verdadero si al menos una exprecion es verdadera.

* Operador Not `!`: Devuelve la negacion de una comparacion

### Condiciones

#### Sintaxis IF
```
if (condiciones......) {
  //instrucciones en el caso de que se cumpla la condicion
} else {
   //instrucciones en el caso de que la condicion no se cumpla
}
```
#### Sintaxis ELSE IF
```
if (condiciones......) {
  //instrucciones en el caso de que se cumpla la condicion
} else if (condiciones .......) {
   //instrucciones en el caso de que la primera condicion no se cumpla pero la condicion del else if se cumpla
} else {
   //instrucciones en el caso de que ninguna de las condiciones realizadas se cumplan
}
```


### Ciclos
  


