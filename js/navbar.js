import {changeTab} from './ui.js'

let createNavListener = () => {
    let list = document.querySelectorAll('#list-nav button')
    let activeEl = document.querySelector('#list-nav button.active')
    list.forEach(el => {
        el.addEventListener('click', (e) => {
            if (el != activeEl){
                activeEl.classList.remove('active')
                el.classList.add('active')
                activeEl = el
                changeTab(el.attributes.getNamedItem('data-nav').nodeValue)
            }
        })
    })
}

export default {
    createNavListener
}