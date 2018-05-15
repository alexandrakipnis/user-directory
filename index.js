const form = document.querySelector('form#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target
    const userName = form.userName.value
    const age = form.age.value
    const users = document.querySelector('#users')
    //users.innerHTML += '<p>' + userName + ', ' + age + '</p>'
    users.innerHTML += `<p>${userName}, ${age}</p>`
    form.userName.value = ' '

    const header2 = document.querySelector('h1.second')
    header2.textContent = userName

    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)


