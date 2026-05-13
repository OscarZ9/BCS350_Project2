fetch("../php/get_leaderboard.php")
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById("leaderboardTable");
        data.forEach((row, index) => {
            table.innerHTML += `<tr><td>${index + 1}</td><td>${row.name}</td><td>${row.best_score}</td></tr>`
        });
    });