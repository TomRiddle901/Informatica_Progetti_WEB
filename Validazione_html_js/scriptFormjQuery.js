$(document).ready(function(){
    $("#JS").show();
    $("#inviaFormBtn").on('click', function(){
        $("#formJs").trigger('reset');
        alert("Form inviato correttamente!");
    });
});