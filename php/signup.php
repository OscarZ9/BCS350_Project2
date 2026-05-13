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
    $stmt = mysqli_prepare($conn, "INSERT INTO users (name, lastName, email, password) VALUES (?, ?, ?, ?)");
    mysqli_stmt_bind_param($stmt, "ssss", $name, $lastName, $email, $hashedPassword);
    mysqli_stmt_execute($stmt);
    header("Location: ../html_files/login.html");
} else {
    echo "Password does not match";
}
?>