
const button = document.querySelector('button')
//const header = document.querySelector('h1.header')
const header2 = document.querySelector('h1.second')



button.addEventListener('click', function(ev){
    let value = document.querySelector('input').value
    let header = document.querySelector('#header')
    header.textContent = "You clicked the button!"
    ev.target.textContent = "AHHHH CLICKED"
    header2.textContent = value;
})
