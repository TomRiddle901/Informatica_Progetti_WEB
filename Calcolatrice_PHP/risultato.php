<?php
    $primoNumero = $_POST["inputPrimoNumero"];
    $operatore = $_POST["selectOperatore"];
    $secondoNumero = $_POST["inputSecondoNumero"];

    if (!isset($primoNumero) && !isset($operatore) && !isset($secondoNumero)){
        echo "Errore nell'invio/ricezione dei dati";
        exit(1);
    }