// RegEx
let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let codiceFiscaleRegEx = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;
let pIvaRexEx = /^[0-9]{11}$/



$(document).ready(function(){
    $("#JS").show();
    $("#inviaFormBtn").on('click', function(){
        $("#formJs").trigger('reset');
        alert("Form inviato correttamente!");
    });
});