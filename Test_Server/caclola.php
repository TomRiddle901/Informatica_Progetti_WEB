<?php
    $numero1 = $_REQUEST["num1"];
    $numero2 = $_REQUEST["num2"];

    if ($numero1 > 10){
        echo "Numero superiore";
    }else{
        echo "Numero inferiore";
    }

    if (isset($numero1)){
        echo "Nuemero inviato";
    }else{
        echo "Numero non inviato";
    }

    echo "Valore numero 1: $numero1 <br> Valore numero 2: $numero2";
