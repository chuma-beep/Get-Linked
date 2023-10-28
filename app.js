const icons = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-list');

function mobileNav() {
    navMenu.classList.toggle('active');
    icons.classList.toggle("active");
}

icons.addEventListener('click', mobileNav);

