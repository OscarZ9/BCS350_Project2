<?php
include 'db.php';
session_start();

$data = json_decode(file_get_contents("php://input"), true);
$score = $data["score"];

$user_id = $_SESSION["user_id"];
$sql = "insert into scores (user_id, score, date) values ('$user_id', '$score', NOW())";
mysqli_query($conn, $sql);
?>