/**
 * RegEx per le Email
 * @type {RegExp}
 * @param emailRegEx RegEx per verificare la validità delle Email
 */
let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/**
 * RegEx per il Codice Fiscale
 * @type {RegExp}
 * @param codiceFiscaleRegEx RegEx per verificare la validità del Codice Fiscale
 */
let codiceFiscaleRegEx = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;
/**
 * RegEx per la Partita IVA
 * @type {RegExp}
 * @param pIvaRegEx RegEx per verificare la validità della Partita IVA
 */
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
    let erroriPresenti = false;

    if (!convalidaEmail()){
        visulizzaErroreCampo($("#inputEmail"), $("#erroreInputEmail"), "Email");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo($("#inputEmail"), $("#erroreInputEmail"));
    }

    if (!convalidaCodiceFiscale()){
        visulizzaErroreCampo($("#inputCodFisc"), $("#erroreInputCodFisc"), "CodiceFiscale");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo($("#inputCodFisc"), $("#erroreInputCodFisc"));
    }

    if (!convalidaPartitaIVA()){
        visulizzaErroreCampo($("#inputPIva"), $("#erroreInputPIva"), "Partita Iva");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo($("#inputPIva"), $("#erroreInputPIva"));
    }

    if (!convalidaTipo()){
        visulizzaErroreCampo($("#selectTipo"), $("#erroreSelectTipo"), "Tipologia");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo($("#selectTipo"), $("#erroreSelectTipo"));
    }

    if (!convalidaSesso()){
        visulizzaErroreCampo($("input[name='sesso']"), $("#erroreInputSesso"), "Sesso");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo($("#input[name='sesso']"), $("#erroreInputSesso"));
    }

    if (!convalidaHobby()){
        visulizzaErroreCampo($("input[name='hobby']"), $("#erroreInputHobby"), "Hobby");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo($("input[name='hobby']"), $("#erroreInputHobby"));
    }

    if (erroriPresenti){
        // Utilizzo della classe errore di Bootstrap
        $("#inviaFormBtn").addClass("border-danger");

        // Messaggio di errore prima del pulsante
        $("#erroriPresentiForm").addClass("text-danger")
            .text("Impossibile inviare il form a causa di alcuni errori");

        return false;
    }else {
        // Ripristino del colore del bordo del pulsate
        $("#btnInvia").removeClass("border-danger");

        // Nasconde il messaggio di errore
        $("#erroriPresentiForm").text("");

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
            $(".is-invalid").removeClass("is-invalid");
        }
    });
});

/**
 * Funzione per cambiare colore al campo input passato per parametro e visualizza lo span
 * con il messaggio di errore
 * @param idCampo campo jQuery input preso dell'HTML
 * @param idSpan campo jQuery span preso dall'HTML
 * @param stringCampo testo dinamico in base all'errore
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