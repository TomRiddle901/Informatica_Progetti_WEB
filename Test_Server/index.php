<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <!--<link rel="stylesheet" type="text/css" href="style.css">-->
</head>
<body>
    <h1>Form</h1>
    <form id="formTestPhp" method="GET" action="caclola.php">
        <label for="inputPrimoNumero" id="inputPrimoNumeroLbl">Primo numero: </label>
        <input type="number" id="inputPrimoNumero" name="num1"><br>

        <label for="inputSecondoNumero" id="inputSecondoNumeroLbl">Secondo numero: </label>
        <input type="number" id="inputSecondoNumero" name="num2"><br>

        <button type="submit" value="calcola">Calcola</button>
    </form>
</body>