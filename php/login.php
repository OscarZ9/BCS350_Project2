<?php
include 'db.php';
session_start();

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $sql);
$user = mysqli_fetch_assoc($result);

if ($user && password_verify($password, $user["password"])){
    $_SESSION["user_id"] = $user["id"];
    $_SESSION["name"] = $user["name"];
    header("location: ../html_files/index.html");
} else {
    header("Location: ../html_files/login.html?error=1");
}

?>