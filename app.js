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
const quoteDay = document.querySelector('#quote-of-the-day')
//Update the quote of the day paragrapgh 
quoteDay.textContent = 'Always start your mornings with a cup of Coffe then tackle the day!'
quoteDay.classList.add('featured')
console.log(quoteDay)


//Part 3: Replace the main photo
const mainPhoto = document.querySelector('#main-photo')
//Read image src + log it 
console.log(mainPhoto.getAttribute('src'))
//Change img src 
mainPhoto.setAttribute('src', './assets/berry-cake.jpg')
//Update image alt
mainPhoto.setAttribute('alt', 'A berry cake served at the cafe')
console.log(mainPhoto)

