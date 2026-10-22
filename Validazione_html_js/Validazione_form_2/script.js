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
 * Funzione per validare il campo di testo
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