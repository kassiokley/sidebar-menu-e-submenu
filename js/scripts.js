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

/*Link ativo*/
const linkColor = document.querySelectorAll('.nav_link')

function colorLink() {
  linkColor.forEach(event => event.classList.remove('active'))
  this.classList.add('active')
}

linkColor.forEach(event => event.addEventListener('click', colorLink))

/*Collapse Menu*/
const linkCollapse = document.getElementsByClassName('collapse_link')

for(let i = 0; i < linkCollapse.length; i++) {
  linkCollapse[i].addEventListener('click', function() {
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollapse')

    const rotate = collapseMenu.previousElementSibling
    rotate.classList.toggle('rotate')
  })
}