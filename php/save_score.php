<?php
include 'db.php';
session_start();

$data = json_decode(file_get_contents("php://input"), true);
$score = $data["score"];
$user_id = $_SESSION["user_id"];

$stmt = mysqli_prepare($conn, "INSERT INTO scores (user_id, score, date) VALUES (?, ?, NOW())");
mysqli_stmt_bind_param($stmt, "ii", $user_id, $score);
mysqli_stmt_execute($stmt);
?>