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
    const dtItem = document.createElement('dt')
    dtItem.textContent = label

    const description = document.createElement('dd')
    //exception handling
    try{
        description.appendChild(item)
    } catch(e){
        description.textContent += item
    }

    content.appendChild(dtItem)
    content.appendChild(description)

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

    //list of users
    const users = document.querySelector('#users')

    //user object
    const user = {
        'Name: ': form.userName.value,
        'Age: ': form.age.value,
        'Favorite Color: ': renderColor(form.favoriteColor.value)
    }

    //add user to list of users
    users.appendChild(renderList(user))

    //changing name header
    const header = document.querySelector('h1.second')
    header.textContent = form.userName.value
    header.style.color = form.favoriteColor.value

    //form reset
    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)


