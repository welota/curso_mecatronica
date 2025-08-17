function SetCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function GetCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

if (GetCookie("username")) {
    document.location.href = "../html/introduction.html"
}

document.addEventListener("DOMContentLoaded", function() {
    if (GetCookie("user")) {
        document.location.href = "../html/courses/introduction.html"
    }

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        // por ahorita no guardo la contraseña porque no se pueden escribir en archivos json desde js

        SetCookie("username", username);
        SetCookie("email", email);

        document.location.href = "../html/courses/introduction.html";
    });
});