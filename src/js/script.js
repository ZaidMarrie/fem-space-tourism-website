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

        if (e.keyCode === rightKey) {
            tabPosition++
            if (tabPosition >= tabs.length) {
                tabPosition = 0
            }
        } else {
            tabPosition--
            if (tabPosition < 0) {
                tabPosition = tabs.length - 1
            }
        }
        
        tabs[tabPosition].setAttribute('tabindex', 0)
        tabs[tabPosition].focus()
    } 
}

function changeTabPanel(e) {
    const targetTab = e.target
    const targetPanel = targetTab.getAttribute('aria-controls')
    const targetImage = targetTab.getAttribute('data-tab-image')
    const tabContainer = targetTab.parentNode
    const mainContainer = tabContainer.parentNode

    // Change active tab
    tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false)
    targetTab.setAttribute('aria-selected', true)

    // Change tab panel to selected tab panel
    hideContent(mainContainer, '[role="tabpanel"]')
    showContent(mainContainer, `#${targetPanel}`)

    // Change Image to selected tab image
    hideContent(mainContainer, 'picture')
    showContent(mainContainer, `#${targetImage}`)
}

// Hide all content
function hideContent(element, selector) {
    element
        .querySelectorAll(selector)
        .forEach(item => item.setAttribute('hidden', true))
}

// Show selected content
function showContent(element, selector) {
    element
        .querySelector(selector)
        .removeAttribute('hidden')
}

tablist.addEventListener('keydown', changeTabFocus)
tabs.forEach(tab => tab.addEventListener('click', changeTabPanel))