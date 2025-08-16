const container = document.getElementsByClassName("content");
const side_menu = document.getElementsByClassName("side-menu");

Array.from(side_menu).forEach(menu => {
    const buttons = menu.querySelectorAll('button');

    buttons.forEach(button => {
        button.onclick = () => {
            const sectionClass = button.id;
            
            const parentContent = menu.closest(".content");
            const targetDiv = parentContent.querySelector(`.${sectionClass}`);

            Array.from(parentContent.children).forEach(child => {
                if (child && child !== parentContent.firstElementChild) {
                    child.style.display = "none";
                }
            });

            targetDiv.style.display = "block";
        }
    })
});