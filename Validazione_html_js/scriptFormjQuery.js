// RegEx
let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let codiceFiscaleRegEx = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;
let pIvaRexEx = /^[0-9]{11}$/

// Funzione per la convalida delle email
function convalidaEmail(){
    let email = $("#inputEmail").val();

    if (email.match(emailRegEx) && email !== ""){
        return true;
    }else{
        return false;
    }
}

// Funzione per convalidare il codice fiscale
function convalidaCodiceFiscale(){
    // Recupera e trasforma in maiuscolo il codice fiscale
    let codiceFiscale = $("#inputCodFisc").val().toUpperCase();

    if (codiceFiscale.match(codiceFiscaleRegEx) && codiceFiscale !== ""){
        return true;
    }else{
        return false;
    }
}

// Funzione per convalidare la partita IVA
function convalidaPartitaIVA(){
    let pIva = $("#inputPIva").val();

    if (pIva.length !== 11){
        return false;
    }else{
        return true;
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