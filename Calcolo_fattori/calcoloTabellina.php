<?php
    $tabellinaUtente = $_POST["inputTabellina"];

    if (!isset($tabellinaUtente)){
        echo "Errore nell'inzio/ricezione dei dati";
        exit(1);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcolo fattori</title>
</head>
<body>
    <h1>Calcolo tra fattori di una tabellina</h1>

    <form id="formTabellina" method="post" action="calcoloTabellina.php">
        <label for="inputTabellina" id="inputTabellinaLbl">Scegli la tabellina da visualizare</label>
        <input type="number" id="inputTabellina" name="inputTabellina" min="0" required><br>

        <nav>
        <?php
            for ($i = 0; $i < $tabellinaUtente; $i++){
                $risultatoOperazione = $tabellinaUtente * $i;
                echo "          <li>$tabellinaUtente * $i = $risultatoOperazione</li>";
            }
        ?>
        </nav>

        <button type="submit" id="inviaTabellina">Mostra tabellina</button>
    </form>
</body>
</html>
