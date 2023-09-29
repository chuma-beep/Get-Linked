const icons = document.querySelectorAll('.icon');

icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.id=== "navbar") {
      x.className += " responsive";
    } else {
      x.id = "navbar";
    }
  }