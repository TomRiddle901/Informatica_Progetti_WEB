<?php
if(!isset($_POST["inputNome"]) && !isset($_POST["inputCognome"]) &&
    !isset($_POST["inputEmail"]) && !isset($_POST["inputPassword"])){
    echo "I dati inseriti non sono stati correttamente inviati";
    exit(1);
}

$nome = $_POST["inputNome"];
$cognome = $_POST["inputCognome"];
$email = $_POST["inputEmail"];
$tel = $_POST["inputNumeroTelefono"];
$dataNascita = $_POST["inputDataNascita"];

$dati = ["nome" => $nome,
        "cognome" => $cognome,
        "email" => $email,
        "telefono" => $tel,
        "dataNascita" => $dataNascita];

$nomeFile = "utenti.json";

// Controlla se esiste un file
if (file_exists($nomeFile)){
    // Se esiste, salva il vecchio contenuto
    $filePrecedente = json_decode(file_get_contents($nomeFile), true);
}

// salva i dati all'interno del JSON
$filePrecedente[] = $dati;
$anagrafica = json_encode($filePrecedente, JSON_PRETTY_PRINT);