
const button = document.querySelector('button')
const header = document.querySelector('h1.header')
const header2 = document.querySelector('h1.second')

button.addEventListener('click', function(ev){
    header.textContent = "You clicked the button!"
    header2.textContent = "My last name is Kipnis"
    ev.target.textContent = "AHHHH CLICKED"
})




// homework: make the button change the text of the heading

// bonus credit: add multiple headings to the page and make the button change the second one 

// super mega bonus credit: add a form to the page, add a text input to the form, update the 
//             heading with the text that you type in the text input 