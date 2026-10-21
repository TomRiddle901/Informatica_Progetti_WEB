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
 */
function validaCampoTesto(idCampo){
    let testo = document.getElementById(idCampo).value;

    if (testo.isEmpty()){
        return false;
    }else {
        return true;
    }
}