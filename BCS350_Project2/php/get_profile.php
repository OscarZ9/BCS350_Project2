<?php
include "db.php";
session_start();

$user_id = $_SESSION["user_id"];

$sql = "SELECT name, scores.score, scores.date
        FROM users
        JOIN scores on scores.user_id = users.id
        WHERE scores.user_id = '$user_id'
";

$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data);
?>