// RegEx
let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let codiceFiscaleRegEx = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;
let pIvaRexEx = /^[0-9]{11}$/

function convalidaEmail(){
    let email = document.getElementById('inputEmail').value;

    if (email.match(emailRegEx) && email !== ""){
        return true;
    }else{
        return false;
    }
}

// Funzione jQuery
$(document).ready(function(){
    // Visualizza il form quando si carica il JS
    $("#JS").show();

    // Quando viene premuto il pulsante mostra un alert
    $("#inviaFormBtn").on('click', function(){
        $("#formJs").trigger('reset');
        alert("Form inviato correttamente!");
    });
});