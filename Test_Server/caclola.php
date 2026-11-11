<?php
    $numero1 = $_REQUEST["num1"];
    $numero2 = $_REQUEST["num2"];

    echo "Valore numero 1: $numero1 <br> Valore numero 2: $numero2";

    if ($numero1 > 10){
        echo "Numero superiore<br>";
    }else{
        echo "Numero inferiore<br>";
    }

    if (isset($numero3)){
        echo "Nuemero inviato<br>";
    }else{
        echo "Numero non inviato<br>";
    }

    if (empty($numero3)){
        echo "Numero vuoto<br>";
    }else{
        echo "Nuemro peino<br>";
    }

    if (is_numeric($numero1)){
        echo "è un numero<br>";
    }else{
        echo "non è un numero<br>";
    }

    $stato = ($numero1 >= 18) ? "Maggiorenne" : "Minorenne"; // Operatore ternario
    echo $stato . "<br>";