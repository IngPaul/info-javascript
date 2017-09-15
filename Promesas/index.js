const request = require( 'request-promise' )
request('http://google.com')
/*
Estados de las promesas
fullfiled
rejected
pending
setled
*/
.then( function(html) {
  console.log(html)
}). catch(function(err) {
  console.log(err)
})
console.log('Estoy comiendo helado mientras se lee la pagina de google')