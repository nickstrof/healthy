// General

const body = document.body;

// Menu Dropdown

const menuToggle = document.getElementById("menu-toggle");
const menuDropdown = document.querySelector(".menu-dropdown");
const blackModal = document.querySelector(".black-modal");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener('click', function (e) {
    menuDropdown.classList.toggle('active');
    blackModal.classList.toggle('active');
    mobileMenu.classList.toggle('active');
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

window.addEventListener('resize', () => {
    menuDropdown.classList.remove('active');
    blackModal.classList.remove('active');
    mobileMenu.classList.remove('active');
})


// Color mode

const colorMode = document.querySelector(".c-mode");

if(localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
}

colorMode.addEventListener('click', () => {
    body.classList.toggle('light');

    if(body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', '');
    }
});