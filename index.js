
const button = document.querySelector('button')
const header = document.querySelector('h1.header')
const header2 = document.querySelector('h1.second')

const form = document.getElementById('form')
const submitted = document.form.submitbutton

function getMessage(){
    const name = document.getElementsById("message")[0].value;
}

submitted.addEventListener('click', function(ev){
    header2.textContent = name
})

button.addEventListener('click', function(ev){
    header2.textContent = "You clicked the button!"
    ev.target.textContent = "AHHHH CLICKED"
})
