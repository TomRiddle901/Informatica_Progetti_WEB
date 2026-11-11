<?php
    $numero1 = $_REQUEST["num1"];
    $numero2 = $_REQUEST["num2"];

    if ($numero1 > 10){
        echo "Numero superiore";
    }else{
        echo "Numero inferiore";
    }

    if (isset($numero3)){
        echo "Nuemero inviato";
    }else{
        echo "Numero non inviato";
    }

    if (empty($numero3)){
        echo "Numero vuoto";
    }else{
        echo "Nuemro peino";
    }

    echo "Valore numero 1: $numero1 <br> Valore numero 2: $numero2";
