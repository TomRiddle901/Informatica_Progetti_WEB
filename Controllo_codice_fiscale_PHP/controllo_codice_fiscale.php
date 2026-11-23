<?php
    $codiceFiscale = $_POST["inputCodiceFiscale"];
    $codiceFiscaleRegEx = '/^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/';

    if (!isset($codiceFiscale)){
        echo "Errore nell'invio/ricezione del codice fiscale";
        exit(1);
    }