function DeleteCookie(name) {
    document.cookie = name + "=; Max-Age=0; path=/";
}

const logoutButton = document.getElementById("logout");

logoutButton.onclick = function() {
    DeleteCookie("user");
    document.location.reload()
};
