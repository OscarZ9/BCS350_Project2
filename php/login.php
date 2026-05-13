<?php
include 'db.php';
session_start();

$email = $_POST["email"];
$password = $_POST["password"];

$stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE email = ?");
mysqli_stmt_bind_param($stmt, "s", $email);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$user = mysqli_fetch_assoc($result);

if ($user && password_verify($password, $user["password"])){
    $_SESSION["user_id"] = $user["id"];
    $_SESSION["name"] = $user["name"];
    header("Location: ../html_files/index.html");
} else {
    header("Location: ../html_files/login.html?error=1");
}
?>