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

// Tabs
const tablist = document.querySelector('[role="tablist"]')
const tabs = document.querySelectorAll('[role="tab"]')
let tabPosition = 0

function changeTabFocus(e) {
    const leftKey = 37
    const rightKey = 39

    if (e.keyCode === leftKey || e.keyCode === rightKey) {
        tabs[tabPosition].setAttribute('tabindex', -1)
    } 

    if (e.keyCode === rightKey) {
        tabPosition++
        if (tabPosition >= tabs.length) {
            tabPosition = 0
        }
    }

    if (e.keyCode === leftKey) {
        tabPosition--
        if (tabPosition < 0) {
            tabPosition = tabs.length - 1
        }
    }
    console.log(tabPosition)
    tabs[tabPosition].setAttribute('tabindex', 0)
    tabs[tabPosition].focus()
}

tablist.addEventListener('keydown', changeTabFocus)