const form = document.querySelector('form#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target
    const userName = form.userName.value
    const age = form.age.value
    const favoriteColor = form.favoriteColor.value

    const color = form.favoriteColor.value
    //document.getElementById("users").style.color = color

    const users = document.querySelector('#users')

    const p = document.createElement('p')
    p.textContent = `Name: ${userName}, Age: ${age}, Favorite Color: ${favoriteColor}`
    p.style.color = color
    users.appendChild(p)

    const header = document.querySelector('h1.second')
    header.textContent = userName

    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)


