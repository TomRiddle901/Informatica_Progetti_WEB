<h1>Prima pagina PHP</h1>
<?php
    $cognome = "Baudo";
    $nome = "Pippo";
    $eta = 20;

    print("Il mio nome è: <i>" . $nome . "</i> il mio cognome è: " . $cognome . " la mia età è: " . $eta);

    if ($eta >= 20){
        print("<br>Sei vecchio " . $cognome);
    }else{
        print("<br>Sei giovane " . $cognome);
    }