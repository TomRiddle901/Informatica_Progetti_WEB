<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Form Registrazione PHP</title>
</head>
<body>
    <h1>Registati</h1>
    <form id="formregistrazione" method="post" action="elaboraForm.php">
        <label for="inputNome" id="inputNomeLbl">Nome:</label>
        <input type="text" id="inputNome" required><br>

        <label for="inputCognome" id="inputCognomeLbl">Cognome:</label>
        <input type="text" id="inputCognome" required><br>

        <label for="inputEmail" id="inputEmailLbl">Email:</label>
        <input type="email" id="inputEmail" required><br>

        <label for="inputConfermaEmail" id="inputConfermaEmailLbl">Conferma Email:</label>
        <input type="email" id="inputConfermaEmail" required><br>

        <label for="inputDataNascita" id="inputDataNascita">Data di nascita:</label>
        <input type="date" id="inputDataNascita" required><br>

        <label for="inputNumeroTelefono" id="inputNumeroTelefonoLbl">Numero di telefono:</label>
        <input type="tel" id="inputNumeroTelefono" required><br>

        <label for="inputPassword" id="inputPasswordLbl">Password:</label>
        <input type="password" id="inputPassword" required><br>

        <button type="submit" id="inviaRegistrazioneBtn">Registrati</button>
    </form>
</body>
</html>