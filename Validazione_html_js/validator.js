// RegEx
let emailRegEx = /^[^\s@]+@[^\s@]+\.[\^s@]+$/;
let codiceFiscaleRegEx = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;
let pIvaRegEx = /^/

// Funzione per popolare la select
function popolaSelect(){
    let select = document.getElementById('selectTipo');

    let optionDefault = new Option('Seleziona', 'default'); // opzione di default
    optionDefault.selected = true; // Impostato come default
    optionDefault.disabled = true; // Cambiata l'opzione non si può più selezionare

    select.add(new Option('Privato', 'privato'));
    select.add(new Option('Libero Professionista', 'liberoProf'));
    select.add(new Option('Azienda', 'azienda'));

    select.default()
}

// Appena avviata la pagina, lìviene popolata la select
document.addEventListener('DOMContentLoaded', ()=>{
    popolaSelect();
});

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

    codiceFiscale.toUpperCase(); // Trasforma il codice fiscale tutto in maiuscolo

    if (codiceFiscale.match(codiceFiscaleRegEx) && codiceFiscale !== ""){
        return true;
    }else{
        return false;
    }
}

function convalidaPartitaIVA(){
    let pIva = document.getElementById('inputPIva').value;

    if (pIva.length < 11){
        return false;
    }else{
        return true;
    }
}

function convalidaSelect(){
    let valoreSelect = document.getElementById('selectTipo').value;

    if (valoreSelect === "default"){
        return false;
    }else{
        return true;
    }
}