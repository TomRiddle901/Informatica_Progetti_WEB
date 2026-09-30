// RegEx
let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let codiceFiscaleRegEx = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;

// Visualizza il form se JS è caricato
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("JS").style.display = "block";
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

    codiceFiscale = codiceFiscale.toUpperCase(); // Trasforma il codice fiscale tutto in maiuscolo

    if (codiceFiscale.match(codiceFiscaleRegEx) && codiceFiscale !== ""){
        return true;
    }else{
        return false;
    }
}

function convalidaPartitaIVA(){
    let pIva = document.getElementById('inputPIva').value;

    if (pIva.length !== 11){
        return false;
    }else{
        return true;
    }
}

function convalidaTipo(){
    let valoreSelect = document.getElementById('selectTipo').value;

    if (valoreSelect === "default"){
        return false;
    }else{
        return true;
    }
}

function convalidaSesso() {
    let opzioni = document.getElementsByName("sesso");

    for (let i = 0; i < opzioni.length; i++) {
        if (opzioni[i].checked) {
            return true; // Trovato uno selezionato
        }
    }

    return false; // Nessuno è stato selezionato
}

function convalidaHobby(){
    let checkbox = document.getElementsByName("hobby");
    let selezionati = 0;

    for (let i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked){
            selezionati++;
        }
    }

    if (selezionati >= 2){
        return true;
    }else{
        return false;
    }
}

function convalidaForm(e){
    e.preventDefault(); // Evita di ricaricare la pagina quando appare un alert

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
    }else {
        alert("Form inviato correttamente!");
        resetForm();
    }
}

function resetForm(){
    document.getElementById('formJs').reset();
}