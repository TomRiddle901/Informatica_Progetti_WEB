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

    if (email.match(emailRegEx)){
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

    if (codiceFiscale.match(codiceFiscaleRegEx)){
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

    if (pIva.match(pIvaRegEx)){
        return true;
    }else{
        return false;
    }
}

/**
 * Funzione per la convalida della Tipologia
 * @returns {boolean}
 */
function convalidaTipo(){
    let valoreSelect = $("#selectTipo").val();
    alert(valoreSelect)

    if (valoreSelect === null){
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
    /**
     * Prende solo l'elemento radio di nome 'inputSesso' che è selezionato dall'utente
    * il .lenght restituisce 0 o 1:
    * 0 sta per non selezionato
    * 1 sta per selezionato
    * quindi se è seleionato (.length > 0) ritorna true*/
    return $("input[name='inputSesso']:checked").length > 0;
}

/**
 * Funzione per la convalida dei checkbox degli hobby
 * @returns {boolean}
 */
function convalidaHobby(){
    return $("input[name='hobby']:checked").length > 2;
}

/**
 * Funzione per la convalida del form
 * @returns {boolean}
 */
function convalidaForm(){

    let messaggioErrore = "";

    if (!convalidaEmail()){
        messaggioErrore += "Email incorretta! ";
        visulizzaErroreCampo($("#inputEmail"), $("#erroreInputEmail"), "Email");
    }else{
        nascondiErroreCampo($("#inputEmail"), $("#erroreInputEmail"));
    }

    if (!convalidaCodiceFiscale()){
        messaggioErrore += "Codice Fiscale incorretto! ";
        visulizzaErroreCampo($("#inputCodFisc"), $("#erroreInputCodFisc"), "CodiceFiscale")
    }else{
        nascondiErroreCampo($("#inputCodFisc"), $("#erroreInputCodFisc"))
    }

    if (!convalidaPartitaIVA()){
        messaggioErrore += "Partita IVA incorretta! ";
        visulizzaErroreCampo($("#inputPIva"), $("#erroreInputPIva"), "Partita Iva");
    }else{
        nascondiErroreCampo($("#inputPIva"), $("#erroreInputPIva"));
    }

    if (!convalidaTipo()){
        messaggioErrore += "Devi selezionare una tipologia valida! ";
        visulizzaErroreCampo($("#selectTipo"), $("#erroreSelectTipo"), "Tipologia ");
    }else{
        nascondiErroreCampo($("#selectTipo"), $("#erroreSelectTipo"));
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

/**
 * Funzione per cambiare colore al campo input passato per parametro e visualizza lo span
 * con il messaggio di errore
 * @param idCampo campo jQuery input preso dell'HTML
 * @param idSpan campo jQuery span preso dall'HTML
 */
function visulizzaErroreCampo(idCampo, idSpan, stringCampo){
    idCampo.css({
        'border-color': '#ff0000'
    });

    idSpan.text(stringCampo + " non inserita o non valida.").css({
        'color': '#ff0000'
    }).show();
}

/**
 * Funzione per cambiare colore al campo input e nasconde lo span
 * @param idCampo campo jQuery input preso dell'HTML
 * @param idSpan campo jQuery span preso dall'HTML
 */
function nascondiErroreCampo(idCampo, idSpan){
    // Ricolora il campo in nero
    idCampo.css({
        'border-color': '#000000'
    });

    // Nasconde lo span
    idSpan.hide();
}