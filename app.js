// console.log('Cozy Cafe JavaScript is connected!');
//Part 1: Update the cafe’s content
const mainTitleEl = document.querySelector('#main-title')
mainTitleEl.textContent = 'Welcome to the Cozy Cafe'
console.log(mainTitleEl)

//Part 2: Style individual and grouped elements
// Select all class elements of h2 highlight-title and store in a variable
const highlightTitleEls = document.querySelectorAll('.highlight-title')

//For each loop to log element text content + change font style to italic 
highlightTitleEls.forEach((highlighttitleEL) => {
    console.log(highlighttitleEL.textContent)
    //font-style HTML > fontStyle JavaScript 
    highlighttitleEL.style.fontStyle = 'italic'
})

//Select Quote of the Day paragraph and store it in a variable using # since it is an ID in HTML
const quoteDayEl = document.querySelector('#quote-of-the-day')
//Update the quote of the day paragrapgh 
quoteDayEl.textContent = 'Always start your mornings with a cup of Coffe then tackle the day!'
//Add a class to the quote of the day element 
quoteDayEl.classList.add('featured')
console.log(quoteDayEl)


//Part 3: Replace the main photo
const mainPhotoEl = document.querySelector('#main-photo')
//Read image src + log it 
console.log(mainPhotoEl.getAttribute('src'))
//Change img src 
mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg')
//Update image alt
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe')
console.log(mainPhotoEl)

//Part 4: Connect the background-colour button
//Selecting button elemtn
const buttonbackgroundColorEl = document.querySelector('#bg-color-btn')
//Selecing the body element of button
buttonbackgroundColorEl.querySelector('body')
console.log(buttonbackgroundColorEl)
//Function to change background color of button
function handleBackgroundChange (buttonbackgroundColorEl){
    buttonbackgroundColorEl.style.backgroundColor = 'lavender'
}

