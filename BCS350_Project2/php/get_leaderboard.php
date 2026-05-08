<?php
include "db.php";
session_start();

$sql = "SELECT users.name, MAX(scores.score) as best_score 
        FROM scores 
        JOIN users ON scores.user_id = users.id 
        GROUP BY scores.user_id 
        ORDER BY best_score DESC 
        LIMIT 10";

$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data);

?>