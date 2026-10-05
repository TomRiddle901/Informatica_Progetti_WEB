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

// Funzione per convalidare la select del tipo
function convalidaTipo(){
    let valoreSelect = $("#selectTipo").val();

    if (valoreSelect === ""){
        return false;
    }else{
        return true;
    }
}

// Funzione per convalidare il sesso
function convalidaSesso() {
    return $("input[name='inputSesso']:checked").length > 0;
    /* Prende solo l'elemento radio di nome 'inputSesso' che è selezionato dall'utente
    * il .lenght restituisce 0 o 1:
    * 0 sta per non selezionato
    * 1 sta per selezionato
    * quindi se è seleionato (.length > 0) ritorna true*/
}

// Funzione per convalidare le checkbox degli hobby
function convalidaHobby(){
    return $("input[name='hobby']:checked").length > 2;
    // Stessa idea della convalida del sesso
}

// Funzione per convalidare il form
function convalidaForm(){

    let messaggioErrore = "";
    if (!convalidaEmail()){
        messaggioErrore += "Email incorretta! ";
    }
    if (!convalidaCodiceFiscale()){
        messaggioErrore += "Codice Fiscale incorretto! ";
    }
    if (!convalidaPartitaIVA()){
        messaggioErrore += "Partita IVA incorretta! ";
    }
    if (!convalidaTipo()){
        messaggioErrore += "Devi selezionare una tipologia valida! ";
    }
    if (!convalidaSesso()){
        messaggioErrore += "Inserisci il sesso! ";
    }
    if (!convalidaHobby()){
        messaggioErrore += "Inserisci almeno 2 hobby! ";
    }

    if (messaggioErrore.length > 0){
        alert(messaggioErrore);
        return false;
    }else {
        alert("Form inviato correttamente!");
        return true;
    }
}

// Funzione jQuery
$(document).ready(function(){
    // Visualizza il form quando si carica il JS
    $("#JS").show();

    // Quando viene premuto il pulsante mostra un alert
    $("#inviaFormBtn").on('click', function(e){
        e.preventDefault(); // Evita che la pagina si ricarica se qualcosa va storto

        if (convalidaForm()){
            $("#formJs").trigger('reset'); // Reset del form
        }
    });
});