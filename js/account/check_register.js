function GetCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const registeredUser = document.querySelector(".user");
const unregisterUser = document.querySelector(".unregister-user");

document.addEventListener("DOMContentLoaded", function() {

    if (GetCookie("user")) {
        registeredUser.style.display = "inline-block";
        unregisterUser.style.display = "none";
    } else {
        registeredUser.style.display = "none";
        unregisterUser.style.display = "inline-block";
    }
});