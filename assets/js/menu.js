const header = document.querySelector('header')
const open = document.querySelector('.open')
const close = document.querySelector('.close')

open.addEventListener('click', function(){
    header.style.display = 'block'
    close.style.display = 'block'
    open.style.display = 'none'
})
close.addEventListener('click', function(){
    header.style.display = 'none'
    close.style.display = 'none'
    open.style.display = 'block'
})
