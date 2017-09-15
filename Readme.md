![ LinkearJavaScript Logo](./images/js.png)

> TIP
> you should use the chrome navigator, when you be into the navigator you have a developer tool, if you have a mac, then you have to press option+command+i 

>TIP
> Where I can find more information? [developer mozilla](developer.mozilla.org)

## **MODULE 1**

### Manejo basico de datos
* Impresion basica de datos
console.log('Hola mundo')

* Recepcion basica de datos
prompt()

## **MODULE 2**

### **Variables y Constantes**
### **Variables and Constant**

Direccion en memoria el cual puede ser reasignado

>A variable is a address in memory that you can access with a name, the characterist that have each variable we can change your value and its name


>You have to use $ or __ after you should put a name or numbers

* Sintaxis

  * `let`

    let nombre= 'Paul'
    
    let nombre = "Juan Carlos Hinojosa"


  * `var`
      var nombre= 'Paul'

### **Constante**
### **Constant**

Direccion en memoria el cual no puede ser reasignado. La ventaja es que el programa sabe exactamente cuanto espacio de la memoria que necesita para almacenar el dato.

>A constant its value can't reassigned


* Sintaxis

  * `const`

    const PI = 3.141592


### **Operaciones Aritmeticas**
### **Arithmetic Operations**

#### **Operadores Aritmeticos**
#### **Arithmetic Operators**

 * Suma: `+` 
 * Resta: `-`
 * Muliplicacion: `*`
 * Division: `/`
 * Modulo: `%`
 
 #### **Libreria Math**
 
 > Tip I used the following functions of Math library
 >- Math.round() I used to have a whole number
 >- Math.ceil I used equal Math.round() but rounded up
 >- Math.flor() I used equal Math.round() but rounded down
 >- Math.random()


 * Valor de pi: `Math.PI`
 * Funcion Exponencial: `Math.pow(10,2)`
 * Redondear: `Math.round(5.6))`
 * Raiz Cuadrada: `Math.sqrt(4)`

 [Mas sobre la libreria Math](https://www.w3schools.com/js/js_math.asp)

### **Tipos de datos**
#### **Booleanos**
Para conocer el valor booleano de una variable

```
let variable = ""
let booleano = new Boolean(variable)
```
`Los valores cuyo version booleana es falsa son :
undefined, NaN, null, 0, -0, "", false`

### **Operaciones de comparaciones**

* Operador de igualdad sin la comparacion del tipo de dato : `==`
* Operador de igualdad tomando en cuenta el tipo de dato : `===`
* Operador de desigualdad sin la comparacion del tipo de dato : `!=`
* Operador de deigualdad tomando en cuenta el tipo de dato : `!==`
* Operador mayor o igual : `>=`
* Operador menor o igual : `<=`
* Operador mayor : `>`
* Operador menor : `<`

### **Operaciones Logicas**
* Operador Y `&&`: Devuelve verdadero unicamente si todas las expreciones consideradas devuelven verdadero

* Operador O `||`: Devuelve verdadero si al menos una exprecion es verdadera.

* Operador Not `!`: Devuelve la negacion de una comparacion

### **Condiciones**

#### **Sintaxis IF**
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


### **Ciclos**

### **While Do-While**

* Sintaxis

En que momento se imprime el bloque de codigo

- Primero se imprime la condicion y despues el blloque de codigo

  while("< expresion booleana >"){ };

- Se imprime el bloque de codigo y luego la condicion
  do{}while()

### **Undefined, null y nan**

***Undefined*** aparece cuando la variable no fue definida inicialmente y no se sabe que tipo de variable es

***Null*** Cuando la variable no tiene contenido o ausencia de valor o se toma encuenta como objeto (viene de los navegadores antiguos)

***nan (Not At Number)*** que no es un numero, o tambien es la representacion del infinito 
 

### Scope
Coleccion de variables y objetos que estan a tu alcance dentro de un bloque de codigo

Global
Es todo aquello que esta fuera de un bloque que pertenece a una funcion



