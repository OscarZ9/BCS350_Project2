fetch("../php/get_profile.php", {
    credentials: "include"
})
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById("historyTable");
        document.getElementById("userName").innerHTML = data.user.name;
        document.getElementById("userEmail").innerHTML = data.user.email;
        document.getElementById("profileAvatar").innerHTML = data.user.name[0];
        data.history.forEach(row => {
            table.innerHTML += `<tr><td>${row.date}</td><td>${row.score}</td></tr>`;
        });
    });