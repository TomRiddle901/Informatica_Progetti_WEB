<?php
    $primoNumero = $_POST["inputPrimoNumero"];
    $operatore = $_POST["selectOperatore"];
    $secondoNumero = $_POST["inputSecondoNumero"];
    $risultatoOperazione = 0;

    if (!isset($primoNumero) && !isset($operatore) && !isset($secondoNumero)){
        echo "Errore nell'invio/ricezione dei dati";
        exit(1);
    }

?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcolatrice in PHP</title>
</head>
<body>
    <h1>Calcolatrice PHP</h1>

    <form id="calcolatrice" method="post" action="risultato.php">
        <label for="inputPrimoNumero" id="inputPrimoNumeroLbl">Primo numero:</label>
        <input type="number" id="inputPrimoNumero" name="inputPrimoNumero" required><br>

        <label for="selectOperatore" id="selectOperatoreLbl">Operatore:</label>
        <select id="selectOperatore" name="selectOperatore" required>
            <option name="default" selected disabled></option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select><br>

        <?php
            switch ($operatore){
                case "+":
                    $risultatoOperazione = $primoNumero + $secondoNumero;
                    break;

                case "-":
                    $risultatoOperazione = $primoNumero - $secondoNumero;
                    break;

                case "*":
                    $risultatoOperazione = $primoNumero * $secondoNumero;
                    break;

                case "/":
                    $risultatoOperazione = $primoNumero / $secondoNumero;
                    break;

                default:
                    break;
            }
        ?>

        <label for="inputSecondoNumero" id="inputSecondoNumeroLbl">Secondo numero:</label>
        <input type="number" id="inputSecondoNumero" name="inputSecondoNumero"><br>

        <button type="submit" id="inviaForm">Invia Form</button>
    </form>
</body>
</html>