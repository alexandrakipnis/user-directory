const form = document.querySelector('form#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target
    const userName = form.userName.value
    const age = form.age.value
    const users = document.querySelector('#users')
    //users.innerHTML += '<p>' + userName + ', ' + age + '</p>'

    const p = document.createElement('p')
    p.textContent = `${userName}, ${age}`
    users.appendChild(p)
    
    //users.innerHTML += `<p>${userName}, ${age}</p>`

    const header = document.querySelector('h1.second')
    header.textContent = userName

    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)


