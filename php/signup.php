<?php
include 'db.php';
session_start();

$name = $_POST["name"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$password = $_POST["password"];
$confirmPassword = $_POST["confirmPassword"];
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

if ($password === $confirmPassword){
    $sql = "INSERT INTO users (name, lastName, email, password) VALUES ('$name', '$lastName', '$email', '$hashedPassword')";
    mysqli_query($conn, $sql);

    header("Location: ../html_files/login.html");
} else {
    echo "Password does not match";
}

?>