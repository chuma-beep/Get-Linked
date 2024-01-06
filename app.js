//for icons
const icons = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-list');

//pop button query selectors
const  button = document.getElementById("button");
const closePopup = document.getElementById("closePopup");
const myPopup = document.getElementById("myPopup")


//nav function
function mobileNav() {
    navMenu.classList.toggle('active');
    icons.classList.toggle("active");
}

icons.addEventListener('click', mobileNav);


// //function to check if form is complete
function formcheck(){
    var form = document.forms["form"]
    var inputs = form.querySelectorAll('input, select, textarea')
    var cansubmit = true

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i]

        if (input.tagName.toLowerCase() === 'select') {
            // For dropdowns
            if (input.value === "") {
                cansubmit = false
            }
        } else if (input.type === 'checkbox') {
            // For checkboxes
            if (!input.checked) {
                cansubmit = false
            }
        } else {
            // For text inputs
            if (input.value.length === 0) {
                cansubmit = false
            }
        }
    }

    document.getElementById('button').disabled = !cansubmit
}

window.onload = formcheck


//for pop up box
   button.addEventListener('click', function () {
    event.preventDefault();
    
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