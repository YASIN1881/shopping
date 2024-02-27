const searchBtn = $.querySelector('#search svg')
const flyMenu = $.querySelector('#flymenu')
const overlay = $.querySelector('#overlay')
const closeMenu = $.querySelector('#closeFly')
const menu = $.querySelector('#menuFly')

function openMenu () {
    overlay.classList.add('overlay--visible')
    flyMenu.classList.remove('left-[-343px]')
    flyMenu.classList.add('left-0')
}

function closeFly () {
    overlay.classList.remove('overlay--visible')
    flyMenu.classList.add('left-[-343px]')
    flyMenu.classList.remove('left-0')
}

searchBtn.addEventListener('click', openMenu)
closeMenu.addEventListener('click', closeFly)
menu.addEventListener('click', openMenu)
overlay.addEventListener('click', closeFly)