// Menu Dropdown

const menuToggle = document.getElementById("menu-toggle");
const menuDropdown = document.querySelector(".menu-dropdown");
const blackModal = document.querySelector(".black-modal");

menuToggle.addEventListener('click', function (e) {
    menuDropdown.classList.toggle('active');
    blackModal.classList.toggle('active');
});

const closeMenu = function () {
    menuToggle.click();
}

document.querySelectorAll('.menu-dropdown a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
});

document.addEventListener('click', e => {
    if(blackModal.contains(e.target)) {
        blackModal.classList.add('active');
        closeMenu();
    }
});