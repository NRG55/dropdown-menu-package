const dropdownButton = document.querySelector(".dropdown-menu-button");

dropdownButton.addEventListener("click", () => {
    document.querySelector(".dropdown-menu").classList.toggle("visible");
});

window.addEventListener("click", (event) => {
    if (event.target !== dropdownButton) {
        document.querySelector(".dropdown-menu").classList.remove("visible");
    };
});