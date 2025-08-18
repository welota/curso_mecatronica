function GetCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function SetCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

const credentialsPath = "/curso_mecatronica/credenciales.json";
const loginForm = document.getElementById("login-form");
var lastPage = "../html/courses/";

if (GetCookie("lastpage")) {
    lastPage += `${GetCookie("lastpage")}.html`;
}

if (GetCookie("username")) {
    document.location.href = lastPage
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(loginForm)
    const data = Object.fromEntries(formData)

    fetch("../credenciales.json") // fetch crea una promesa cuando se abre el archivo
        .then(response => response.json()) //la promesa devuelva varios valores, como su estado, si llego y el cuerpo de la respuesta
        .then(credentials => { //luego se convierte a json y se devuelve a credentials como un objeto plano
            console.log(credentials)

            for (const email in credentials) {
                const user = credentials[email]

                if (data.email === email && data.password === user.password) {
                    SetCookie("username", user.username);
                    SetCookie("email", email);
                    SetCookie("lastpage", user.lastpage);
                    document.location.href = "../index.html"
                    return
                }
            }

            alert("Usuario o contraseña invalido!")
        })
})