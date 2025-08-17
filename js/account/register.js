function SetCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function GetCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

var lastPage = "../html/courses/";

if (GetCookie("lastpage")) {
    lastPage += `${GetCookie("lastpage")}.html`;
}

if (GetCookie("username")) {
    document.location.href = lastPage
}

document.addEventListener("DOMContentLoaded", function() {
    if (GetCookie("user")) {
        document.location.href = lastPage
    }

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        // por ahorita no guardo la contraseña porque no se pueden escribir en archivos json desde js

        SetCookie("username", username);
        SetCookie("email", email);
        SetCookie("lastpage", "introduction")

        document.location.href = lastPage;
    });
});