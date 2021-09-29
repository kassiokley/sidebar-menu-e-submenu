/*Expandir o Menu*/
const showMenu = (toggleId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId),
  bodyPadding = document.getElementById(bodyId)

  if(toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('expandir')
      bodyPadding.classList.toggle('body-pd')
    })
  }
}

showMenu('nav-toggle', 'navbar', 'body-pd')