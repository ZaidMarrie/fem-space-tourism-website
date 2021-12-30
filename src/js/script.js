const menuToggleBtn = document.querySelector('.nav-toggle')
const navMenu = document.getElementById('navigation')

// Toggle navMenu open/close
function toggleMenu(event) {
    const visibility = navMenu.getAttribute('data-visible')

    if(visibility === 'false') {
        navMenu.setAttribute('data-visible', true)
        menuToggleBtn.setAttribute('aria-expanded', true)
    } else {
        navMenu.setAttribute('data-visible', false)
        menuToggleBtn.setAttribute('aria-expanded', false)
    }
}

menuToggleBtn.addEventListener('click', toggleMenu)