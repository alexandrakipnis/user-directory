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
    content.textContent = `${label}${item}`
    return content
}

//create list item with user information
const renderList = function(userName, age, favoriteColor){
    const list = document.createElement('ul')
    list.appendChild(renderListItem("Name: ", userName))
    list.appendChild(renderListItem("Age: ", age))
    const colorItem = renderListItem("Favorite Color", '')
    colorItem.appendChild(renderColor(favoriteColor))
    list.appendChild(colorItem)
    return list
}

const handleSubmit = function(ev){
    ev.preventDefault()

    //declaring users variables
    const form = ev.target
    const userName = form.userName.value
    const age = form.age.value
    const favoriteColor = form.favoriteColor.value

    //list of users
    const users = document.querySelector('#users')

    //append new user to list of users
    users.appendChild(renderList(userName, age, favoriteColor))

    //changing name header
    const header = document.querySelector('h1.second')
    header.textContent = userName
    header.style.color = favoriteColor

    //form reset
    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)


