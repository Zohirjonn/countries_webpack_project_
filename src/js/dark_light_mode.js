const modeBtn = document.querySelector('.header__dark-mode')
const body = document.querySelector('body')
const modeFromLocal = localStorage.getItem('mode') ? localStorage.getItem('mode') : null

if(modeFromLocal){
    body.classList.add('dark-mode')
}


modeBtn.addEventListener('click', () => {
    if(modeFromLocal){
        localStorage.removeItem('mode')
    }else{
        localStorage.setItem('mode', 'dark')
    }
    body.classList.toggle('dark-mode')
})