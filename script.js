const toggleButton = document.getElementsByClassName('hamburger-menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-elements')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})