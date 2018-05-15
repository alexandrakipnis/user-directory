
/*const button = document.querySelector('button')
//const header = document.querySelector('h1.header')
const header2 = document.querySelector('h1.second')



button.addEventListener('click', function(ev){
    let value = document.querySelector('input').value
    let header = document.querySelector('#users')
    header.textContent = "You clicked the button!"
    ev.target.textContent = "AHHHH CLICKED!!"
    header2.textContent = value;
    
    const users = document.querySelector('#users')
    users.textContent += '' + value
})*/

const form = document.querySelector('form#userForm')
const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target
    const userName = form.userName.value
    const age = form.age.value
    const users = document.querySelector('#users')
    users.innerHTML += '<p>' + userName + ', ' + age + '</p>'
    form.userName.value = ' '

    const header2 = document.querySelector('h1.second')
    header2.textContent = userName

    form.reset()
}

form.addEventListener('submit', handleSubmit)


