const toggleButton = document.getElementsByClassName('hamburger-menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-elements')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function myFunction() {
  var x = document.getElementById("button__content");

    if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
