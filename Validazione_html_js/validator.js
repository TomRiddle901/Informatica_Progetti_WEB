let emailRegEx = /^[^\s@]+@[^\s@]+\.[\^s@]+$/;

function convalidaEmail(){
    let email = document.getElementById('inputEmail').value;

    if (email.match(emailRegEx) && email !== ""){
        return true;
    }else{
        return false;
    }
}