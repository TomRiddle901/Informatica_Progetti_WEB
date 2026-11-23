<?php
    $codiceFiscale = $_POST["inputCodiceFiscale"];
    $codiceFiscaleRegEx = '/^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/';

    if (!isset($codiceFiscale)){
        echo "Errore nell'invio/ricezione del codice fiscale";
        exit(1);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Controllo codice fiscale in PHP</title>
</head>
<body>
    <h1>Controllo codice fiscale</h1>

    <form id="controlloCodiceFiscale" method="post" action="controllo_codice_fiscale.php">
        <label for="inputCodiceFiscale" id="inputCodiceFiscaleLbl">Codice fiscale:</label>
        <input type="text" id="inputCodiceFiscale" name="inputCodiceFiscale" required><br>

        <?php
            if (preg_match($codiceFiscaleRegEx, $codiceFiscale)){
                echo "<p style='color: #00ff00'>Il codice fiscale è corretto</p><br>";
            }else{
                echo "<p style='color: #ff0000'>Il codice fiscale non è corretto</p><br>";
            }
        ?>

        <button type="submit" id="inviaCodiceFiscale">Invia codice fiscale</button>
    </form>
</body>
</html>