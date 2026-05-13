<?php
include 'db.php';
session_start();

$user_id = $_SESSION["user_id"];

$stmt_user = mysqli_prepare($conn, "SELECT name, email FROM users WHERE id = ?");
mysqli_stmt_bind_param($stmt_user, "i", $user_id);
mysqli_stmt_execute($stmt_user);
$user = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt_user));

$stmt = mysqli_prepare($conn, "SELECT score, date FROM scores WHERE user_id = ? ORDER BY date DESC");
mysqli_stmt_bind_param($stmt, "i", $user_id);
mysqli_stmt_execute($stmt);
$history = mysqli_fetch_all(mysqli_stmt_get_result($stmt), MYSQLI_ASSOC);

echo json_encode(["user" => $user, "history" => $history]);
?>