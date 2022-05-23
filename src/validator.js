const validator = {

  isValid: function (creditcardNumber) {
    //recibo num tarjeta crédito y lo vuelo array, luego cada dígito a número y lo reverseo
    let arR = creditcardNumber.split('').map(function(x) {return parseInt(x)}).reverse();

    for (let i = 1; i < arR.length; i+=2) {  //recorrer array desde i posición 1 y luego intercalado
      let number = arR[i] * 2;               // el número con índice i lo multiplico por 2
      let sum = 0;

      if(number >= 10){
              
        while (number > 0) {
        sum += number % 10;   //agregar a variable suma, el residuo en cada iteración y así reducir los números mayores a 10
        number = Math.floor(number / 10);   //redondear(entero) hacia abajo el número de la división
        }
      } 
      if(sum > 0) number = sum;
      arR[i] = number;   //número resultante y reducido (posición impar)
    }
  
    const resTotal = arR.reduce(function(a,b){ 
    return a+b;
    })
  
    if (resTotal%10 === 0){
      return true;
    } else {
      return false;
    }
  }

  
  
};
  
  

 


   




export default validator;
