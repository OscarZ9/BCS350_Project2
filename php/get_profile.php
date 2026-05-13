<?php
include "db.php";
session_start();

$user_id = $_SESSION["user_id"];

$sql = "SELECT users.name, users.email, scores.score, scores.date
        FROM users
        LEFT JOIN scores on scores.user_id = users.id
        WHERE scores.user_id = '$user_id'
";

$sql_user = "SELECT name, email FROM users WHERE id = '$user_id'";
$result_user = mysqli_query($conn, $sql_user);
$user = mysqli_fetch_assoc($result_user);

$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode(["user" => $user, "history" => $data]);
?>