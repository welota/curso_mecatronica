function GetCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const button = document.getElementById("start");

button.onclick = function() {
    if (GetCookie("username")) {
        document.location.href = "html/courses/introduction.html";
    } else {
        document.location.href = "html/signin.html";
    }
};