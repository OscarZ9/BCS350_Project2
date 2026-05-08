fetch("../php/get_profile.php")
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById("historyTable");
        data.forEach(row => {
            table.innerHTML += `<tr><td>${row.date}</td><td>${row.score}</td></tr>`;
        });
    });