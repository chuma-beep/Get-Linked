const icons = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-list');

const  button = document.getElementById("button");
const closePopup = document.getElementById("closePopup");
const myPopup = document.getElementById("myPopup")


function mobileNav() {
    navMenu.classList.toggle('active');
    icons.classList.toggle("active");
}

icons.addEventListener('click', mobileNav);


//for pop up box

   button.addEventListener('click', function () {
    myPopup.classList.add("show")
   })
   closePopup.addEventListener('click', function (){
    myPopup.classList.remove("show")
   })
   window.addEventListener('click', function (event){
    if (event.target == myPopup){
    myPopup.classList.remove("show")
}
   })

