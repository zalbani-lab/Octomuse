function changeClass() {
    const openMenu = document.getElementById("openMenu");
    openMenu.classList.toggle("active");

    const animIconMenu = document.getElementById("menuButton");
    animIconMenu.classList.toggle("is-active");
}