import UI from './ui.js'
const list = document.querySelectorAll('#list-nav button')
let activeEl = document.querySelector('#list-nav button.active')

let createNavListener = () => {
    list.forEach(el => {
        el.addEventListener('click', (e) => {
            if (el != activeEl){
                UI.changeTab(el.attributes.getNamedItem('data-nav').nodeValue)
            }
        })
    })
}

let activeNavEl = (data) => {
    activeEl.classList.remove('active')
    let el = Array.from(list).find((el) => el.attributes.getNamedItem('data-nav').nodeValue === data)
    el.classList.add('active')
    activeEl = el
}

export default {
    createNavListener, activeNavEl
}