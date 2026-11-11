<?php
    $numero1 = $_REQUEST["num1"];
    $numero2 = $_REQUEST["num2"];

    echo "Valore numero 1: $numero1 <br> Valore numero 2: $numero2" . "<br>";

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

    switch ($numero1){
        case 1:
            echo "Lunedì<br>";
            break;
        case 2:
            echo "Marted'<br>";
            break;
        case 6:
        case 7:
            echo "Domenica<br>";
            break;
        default:
            echo "Altro giorno<br>";
            break;
    }

    $tabellinaDaCalcolare = $_REQUEST["inputTabellina"];

    if (is_numeric($tabellinaDaCalcolare)){
        print("<table style='border: 1px solid #000000;'>");
        for ($i = 0; $i < 11; $i++){
            $risultato = $tabellinaDaCalcolare * $i;
            print("<tr>
                    <td style='border-bottom: 1px solid #000000'>$tabellinaDaCalcolare x $i = <strong>$risultato</strong></td>
                    </tr>");
        }
        print("</table>");
    }else{
        echo "<strong>Il valore inserito non è un numero.</strong>";
    }