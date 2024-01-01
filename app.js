const icons = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-list');

// let button = document.querySelector("#button");
// let closePopup = document.querySelector(".closePopup");



function mobileNav() {
    navMenu.classList.toggle('active');
    icons.classList.toggle("active");
}

icons.addEventListener('click', mobileNav);




//    button.addEventListener('click', function () {
//     myPopup.classList.add("#pop-box")
//    })
//    closePopup.addEventListener('click', function (){
//     myPopup.classList.remove("show")
//    })
//    window.addEventListener('click', function (event){
//     if (event.target == myPopup){
//     myPopup.classList.remove("show")
// }
//    })

