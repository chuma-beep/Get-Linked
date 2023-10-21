const icons = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-list');

icons.addEventListener('click', mobileMenu);

function mobileMenu() {
    navMenu.classList.toggle('active');
    icons.classList.toggle("active");
}




/*
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});*/