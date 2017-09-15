//para promesas que necesitan un flujo de una promesa anterior
/*function Calcular() {
  return new Promise( ( resolve, reject ) => {
    setTimeout( resolve, 400, 7)
  } )
}
function SegundCalculo( numero ) {
  console.log( numero )
  return new Promise( ( resolve, reject ) => {
    setTimeout( resolve, 200, 'segunda promesa')
  } )
}
Calcular()
.then( SegundCalculo )
.then( console.log )
*/

function Sumar( a, b) {
  return new Promise( ( resolve, reject ) => {
    resolve( a + b )
  } )
}
function EsPar( x ) {
  return new Promise( ( resolve, reject ) => {
    resolve( x % 2 )
  } )
}
Sumar( 2, 7 )
.then( EsPar )
.then( (res) =>{
  console.log( res )
  if( res == 0)
    console.log( 'La suma ha dado un numero par' )
  else
    console.log( 'La suma ha dado un numero impar' ) 
} )

let promess1 = new Promise( ( resolve, reject ) => {
    setTimeout( () =>{
      console.log( 'Tomando licor' )
      resolve('OK')
    }, 200, 'Operacion en paralelo ejecutada' ) 
  }
)
promess1
.then( console.log )
