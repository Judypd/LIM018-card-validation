import validator from './validator.js';

console.log(validator);

document.getElementById("enter").addEventListener('click',()=> {
    document.getElementById("hidd").classList.remove("hidden");
    document.getElementById("firstPage").style.display="none";
});

let creditcardNumber = document.getElementById("cardNumber");

document.getElementById("valid").addEventListener('click',validation); //escuchar evento para función validator
function validation(){
    let luhnNumber = validator.isValid(creditcardNumber.value);
    creditcardNumber.value = validator.maskify(creditcardNumber.value);
      if (luhnNumber === true) {
        document.getElementById("theValidation").innerHTML = "* ¡Felicidades! número de tarjeta válido";
        document.getElementById("theValidation").style.display='block';
    }
      else {
        document.getElementById("theValidation").innerHTML = "* Lo siento, número de tarjeta inválido";
        document.getElementById("theValidation").style.display='block';
    }
}

document.getElementById("clean").addEventListener('click',removeDiv);
function removeDiv() {
    document.getElementById("theValidation").style.display='none';
}











