//let numMax = 5;
//let numMin = 1;
let userNumber = 0;

let numberMagic = Math.round(Math.random()*10)
//let numberMagic = Math.random()*(numMax-numMin)
do{
  userNumber = parseInt(prompt());

  if(userNumber == numberMagic){
    alert("Eres un mago, adivinaste el numero!");
  }else if(userNumber < numberMagic){
    alert("El numero magico es mayor" + numberMagic);
  }else{
    alert("El numero magico es menor" + numberMagic); 
  }
  
}while(userNumber != numberMagic);