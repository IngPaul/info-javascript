const request = require( 'request' )
request('http://google.com', function(err,res) {
  if( err ) console.log(err)
  console.log(res)
})
console.log('Estoy comiendo helado mientras se lee la pagina de google')