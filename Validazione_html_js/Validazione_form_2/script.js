/**
 * RexEx per l'Email
 */
let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Al caricamento della pagina, mostra il form JS
 */
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("divFormJs").style.display = 'block';
});

/**
 * Funzione per validare un campo di testo
 * @param idCampo id del campo di testo
 * @return {boolean}
 */
function convalidaCampoTesto(idCampo){
    let testo = document.getElementById(idCampo).value;

    if (testo.isEmpty()){
        return false;
    }else {
        return true;
    }
}

/**
 * Funzione per convalidare l'input numerico (0 - 100)
 * @returns {boolean}
 */
function convalidaInputNumerico(){
    let campoNumerico = document.getElementById("inputNumerico").value;

    if (campoNumerico.length === 0 || campoNumerico < 0 || campoNumerico > 100){
        return false;
    }else {
        return true;
    }
}

/**
 * Funzione per convalidare l'input numerico (max 5 cifre)
 * @return {boolean}
 */
function convalidaInputNumerico5Cifre(){
    let campoNumerico = document.getElementById("inputNumerico5Cifre").value;

    if (campoNumerico.length === 0 || campoNumerico < 0 || campoNumerico > 99999){
        return false;
    }else {
        return true;
    }
}

/**
 * Funzione per convalidare l'email
 * @return {boolean}
 */
function convalidaEmail(){
    let email = document.getElementById("inputEmail").value;

    if (email.match(emailRegEx)){
        return true;
    }else{
        return false;
    }
}

/**
 * Funzione per convalidare il select della tipologia
 * @return {boolean}
 */
function convalidaSelectTipologia(){
    let elementoSelezionato = document.getElementById("selectTipo").value;

    if (elementoSelezionato !== ""){
        return true;
    }else{
        return false;
    }
}

/**
 * Funzione per convalidare l'input della data
 * @return {boolean}
 */
function convalidaData(){
    let data = document.getElementById("selectData").value;

    if (data !== ""){
        return true;
    }else{
        return false;
    }
}

/**
 * Funzione per convalidare l'importo inserito
 * @return {boolean}
 */
function convalidaImporto(){
    let importo = document.getElementById("inputImporto").value;

    if (importo !== "" && importo > 0){
        return true;
    }else{
        return false;
    }
}

/**
 * Funzione per convalidare la percentuale inserita.<br>
 * La percentuale è un numero intero
 * @return {boolean}
 */
function convalidaPercentuale(){
    let percentuale = document.getElementById("inputPercentuale").value;

    if (percentuale !== "" && percentuale > 0){
        return true;
    }else{
        return false;
    }
}

/**
 * Funzione per convalidare le checkbox e i campi radio utilizzando il nome
 * @param nameCheckbox Nome della checkbox (tag <name>)
 * @return {boolean}
 */
function convalidaCheckboxERadio(nameCheckbox){
    let checkbox = document.getElementsByName(nameCheckbox);
    let selezionati = 0;

    for (let i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked){
            selezionati++;
        }
    }

    if (selezionati >= 1){
        return true;
    }else{
        return false;
    }
}

/**
 * Funzione per convalidare la presenza di un file
 * @return {boolean}
 */
function convalidaFile(){
    let file = document.getElementById("inputFile");

    if (file && file.files.length){
        return true;
    }else{
        return false;
    }
}

/**
 * Funzione per convalidare il caricamento di un file immagine.<br>
 * Files supportati: *.jpeg, *.jpg, *.png
 * @return {boolean}
 */
function convalidaFileImmagine(){
    let fileImmagine = document.getElementById("inputImmagine");

    if (fileImmagine && fileImmagine.files.length){
        let file = fileImmagine.files[0];

        if (file.type === "image/jpeg" || file.type === "image/png"){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

/**
 * Funzione per mostrare gli errori nei campi sbagliati con un messaggio di errore personalizzato
 * @param idCampo ID del campo input HTML
 * @param idSpan ID dello span associato al campo di input
 * @param msgErrore Messaggio di errore personalizzato in base al campo di input
 */
function mostraErroreCampo(idCampo, idSpan, msgErrore){
    let campoInput = document.getElementById(idCampo);
    let span = document.getElementById(idSpan);

    span.textContent = msgErrore;
    span.style.display = 'block';
    campoInput.style.borderColor = '#ff0000';
}

/**
 * Funzioner per nascondere i messaggi di errore
 * @param idCampo ID del campo input HTML
 * @param idSpan ID dello span associato al campo di input
 */
function nascondiErroreCampo(idCampo, idSpan){
    let campoInput = document.getElementById(idCampo);
    let span = document.getElementById(idSpan);

    span.style.display = 'none';
    campoInput.style.borderColor = '#cad4e0';
}

function convalidaForm(e){
    e.preventDefault(); // Evita di ricaricare la pagina

    let erroriPresenti = false;

    if (!convalidaCampoTesto("inputTesto")){
        mostraErroreCampo("inputTesto", "msgErrTxt", "Devi compilare questo campo!");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo("inputTesto", "msgErrTxt");
    }

    if (!convalidaInputNumerico()){
        mostraErroreCampo("inputNumerico", "msgErrNum1");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo("inputNumerico", "msgErrNum1", "Campo vuoto o valori inseriti non corretti");
    }

    if (!convalidaInputNumerico5Cifre()){
        mostraErroreCampo("inputNumerico5Cifre", "msgErrNum2", "Campo vuoto o valori inseriti non corretti");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo("inputNumerico5Cifre", "msdErrNum2");
    }

    if (!convalidaEmail()){
        mostraErroreCampo("inputEmail", "msgErrEmail", "Email non inserita o non corretta!");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo("inputEmail", "msgErrEmail");
    }

    if (!convalidaSelectTipologia()){
        mostraErroreCampo("selectTipologia", "msgErrSelTipologia", "Devi selezionare una tipologia!");
        erroriPresenti = true;
    }else{
        nascondiErroreCampo("selectTipologia", "msgErrSelTipologia");
    }

    if (!convalidaData()){
        mostraErroreCampo("selectData", "msgErrSelData", "Devi selezionare una data!");
        erroriPresenti = true;
    }else {
        nascondiErroreCampo("selectData", "msgErrSelData");
    }
}