function GetCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const userLabel = document.getElementById("registered-user");

const registeredUser = document.querySelector(".user");
const unregisterUser = document.querySelector(".unregister-user");

if (GetCookie("username")) {
    registeredUser.style.display = "inline-block";
    unregisterUser.style.display = "none";
    userLabel.innerHTML = `${GetCookie("username")} <span class="material-symbols-outlined">account_circle</span>`;

} else {
    registeredUser.style.display = "none";
    unregisterUser.style.display = "inline-block";
}