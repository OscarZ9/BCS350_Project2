fetch("../php/check_session.php")
    .then (response => response.json())
    .then (data => {
        if (!data.loggedIn) {
            window.location.href = "../html_files/login.html"
        }
    });