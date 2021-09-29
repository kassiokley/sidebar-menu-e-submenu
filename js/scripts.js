/*Expandir o Menu*/
const showMenu = (toggleId, navbarId) => {
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId)

  if(toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('expandir')
    })
  }
}

showMenu('nav-toggle', 'navbar')