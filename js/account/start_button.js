function GetCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const button = document.getElementById("start");

var lastPage = "html/courses/";

if (GetCookie("lastpage")) {
    lastPage += `${GetCookie("lastpage")}.html`;
}

button.onclick = function() {
    if (GetCookie("username")) {
        document.location.href = lastPage;
    } else {
        document.location.href = "html/signin.html";
    }
};