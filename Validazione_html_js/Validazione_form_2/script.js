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