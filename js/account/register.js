function SetCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function GetCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

document.addEventListener("DOMContentLoaded", function() {
    if (GetCookie("user")) {
        document.location.href = "../html/introduction.html"
    }

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = { username, email, password };
        SetCookie("user", JSON.stringify(user));

        alert("Usuario registrado exitosamente");

        document.location.href = "../html/introduction.html";
    });
});