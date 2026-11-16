<?php
if(!isset($_POST["nome"]) && !isset($_POST["cognome"]) && !isset($_POST["email"]) && !isset($_POST["password"])){
    echo "I dati inseriti non sono stati correttamente inviati";
    exit(1);
}

$nome = $_POST["nome"];
$cognome = $_POST["cognome"];
$email = $_POST["email"];
$tel = $_POST["telefono"];
$dataNascita = $_POST["dataNascita"];

$dati = ["nome" => $nome,
        "cognome" => $cognome,
        "email" => $email,
        "telefono" => $tel,
        "dataNascita" => $dataNascita];

$nomeFile = "utenti.json";

if (file_exists($nomeFile)){
    $filePrecedente = json_decode(file_get_contents($nomeFile), true);
}