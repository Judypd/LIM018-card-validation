import validator from './validator.js';

console.log(validator);

document.getElementById("enter").addEventListener('click', function() {
    document.getElementById("hidden");
});


document.getElementById("valid").addEventListener('click',function() {
    let creditcardNumber = document.getElementById("cardNumber").value;

    let luhnNumber = validator.isValid (creditcardNumber);

    if (luhnNumber === true) {
        document.getElementById("theValidation").innerHTML = "¡Felicidades! número de tarjeta válido";
    } else {
        document.getElementById("theValidation").innerHTML = "Lo siento, número de tarjeta inválido";
    }

})



validator.maskify (creditcardNumber);



