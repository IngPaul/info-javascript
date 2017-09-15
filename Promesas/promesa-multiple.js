let p1 = new Promise( function(resolve, reject) {
  setTimeout( resolve, 500, 'Hola Mundo')
})
let p2 = new Promise( function(resolve, reject) {
  setTimeout( resolve, 600, 'Segundo Hola Mundo')
})
let saluda = function() {
  console.log( 'Hola a todos' )
}
let p3 
//activar para comprobar que cuando una promesa falla promise all falla
// p3 = new Promise(() => reject())
//Cuando una las promesas no dependen
Promise.all( [ p1, p2, p3 ] ). then( function( resultados ) {
  console.log( resultados )
  saluda()
} ).catch( function() {
  console.log('falla')
})
