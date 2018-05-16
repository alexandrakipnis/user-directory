const form = document.querySelector('form#userForm')

//create color div
const renderColor = function(favoriteColor){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '12rem'
    colorDiv.style.height = '1rem'
    return colorDiv
}

//create generic list item
const renderListItem = function(label, item){
    const content = document.createElement('li')
    content.textContent = `${label}`

    //exception handling
    try{
        content.appendChild(item)
    } catch(e){
        content.textContent += item
    }

    return content
}

//create list item with user information
const renderList = function(data){
    const list = document.createElement('ul')

    Object.keys(data).map(function(label) {
        list.appendChild(renderListItem(label, data[label]))
    })

    return list
}

const handleSubmit = function(ev){
    ev.preventDefault()

    const form = ev.target

    const users = document.querySelector('#users')

    //declaring users variables
    /*const userName = form.userName.value
    const age = form.age.value
    const favoriteColor = form.favoriteColor.value*/

    const user = {
        'Name: ': form.userName.value,
        'Age: ': form.age.value,
        'Favorite Color: ': renderColor(form.favoriteColor.value)
    }

  
    users.appendChild(renderList(user))


    //append new user to list of users
    //users.appendChild(renderList(userName, age, favoriteColor))

    //changing name header
    const header = document.querySelector('h1.second')
    header.textContent = form.userName.value
    header.style.color = form.favoriteColor.value

    //form reset
    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)


