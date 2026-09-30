let emailRegEx = /^[^\s@]+@[^\s@]+\.[\^s@]+$/;
let codiceFiscaleRegEx = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;

function convalidaEmail(){
    let email = document.getElementById('inputEmail').value;

    if (email.match(emailRegEx) && email !== ""){
        return true;
    }else{
        return false;
    }
}

function convalidaCodiceFiscale(){
    let codiceFiscale = document.getElementById('inputCodFiscale').value;

    if (codiceFiscale.match(codiceFiscaleRegEx) && codiceFiscale !== ""){
        return true;
    }else{
        return false;
    }
}