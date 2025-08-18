function DeleteCookie(name) {
    document.cookie = name + "=; Max-Age=0; path=/";
}

const logoutButton = document.getElementById("logout");

logoutButton.onclick = function() {
    DeleteCookie("username");
    DeleteCookie("email");
    DeleteCookie("lastpage");
    document.location.reload()
};
