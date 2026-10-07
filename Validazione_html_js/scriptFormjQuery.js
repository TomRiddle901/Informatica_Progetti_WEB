// RegEx
let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let codiceFiscaleRegEx = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;
let pIvaRegEx = /^[0-9]{11}$/

/**
 * Funzione per la convalida delle email
 * @returns {boolean}
 */
function convalidaEmail(){
    let email = $("#inputEmail").val();

    if (email.match(emailRegEx) && email !== ""){
        return true;
    }else{
        return false;
    }
}

/**
 * Funzione per la convalida del codice fiscale
 * @returns {boolean}
 */
function convalidaCodiceFiscale(){
    // Recupera e trasforma in maiuscolo il codice fiscale
    let codiceFiscale = $("#inputCodFisc").val().toUpperCase();

    if (codiceFiscale.match(codiceFiscaleRegEx) && codiceFiscale !== ""){
        return true;
    }else{
        return false;
    }
}

/**
 * Funzione per la convalida della partita IVA
 * @returns {boolean}
 */
function convalidaPartitaIVA(){
    let pIva = $("#inputPIva").val();

    if (pIva.match(pIvaRegEx) && pIva !== ""){
        return false;
    }else{
        return true;
    }
}

/**
 * Funzione per la convalida della Tipologia
 * @returns {boolean}
 */
function convalidaTipo(){
    let valoreSelect = $("#selectTipo").val();

    if (valoreSelect === ""){
        return false;
    }else{
        return true;
    }
}

/**
 * Funzione per la convalida del Sesso
 * @returns {boolean}
 */
function convalidaSesso() {
    return $("input[name='inputSesso']:checked").length > 0;
    /* Prende solo l'elemento radio di nome 'inputSesso' che è selezionato dall'utente
    * il .lenght restituisce 0 o 1:
    * 0 sta per non selezionato
    * 1 sta per selezionato
    * quindi se è seleionato (.length > 0) ritorna true*/
}

/**
 * Funzione per la convalida dei checkbox degli hobby
 * @returns {boolean}
 */
function convalidaHobby(){
    return $("input[name='hobby']:checked").length > 2;
    // Stessa idea della convalida del sesso
}

/**
 * Funzione per la convalida del form
 * @returns {boolean}
 */
function convalidaForm(){

    let messaggioErrore = "";

    if (!convalidaEmail()){
        messaggioErrore += "Email incorretta! ";
        $("#erroreInputEmail").text("Email non inserita o non valida!").css({
            'color': '#ff0000'
        }).show();
        $("#inputEmail").css({
            'border-color': '#ff0000'
        });
    }else{
        $("#erroreInputEmail").hide();
        $("#inputEmail").css({
            'border-color': '#000000'
        });
    }

    if (!convalidaCodiceFiscale()){
        messaggioErrore += "Codice Fiscale incorretto! ";
        $("#erroreInputCodFisc").css({
            'color': '#ff0000'
        }).show();
        $("#inputCodFisc").css({
            'border-color': '#ff0000'
        });
    }else{
        $("#erroreInputCodFisc").hide();
        $("#inputCodFisc").css({
            'border-color': '#000000'
        });
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

/**
 * Funzione jQuery per visualizzare il form JS + invio del form tramite bottone
 */
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