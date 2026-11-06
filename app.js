// console.log('Cozy Cafe JavaScript is connected!');
//Part 1: Update the cafe’s content
const mainTitleEl = document.querySelector('#main-title')
mainTitleEl.textContent = 'Welcome to the Cozy Cafe'
// console.log(mainTitleEl)

//Part 2: Style individual and grouped elements
// Select all class elements of h2 highlight-title and store in a variable
const highlightTitleEls = document.querySelectorAll('.highlight-title')

//For each loop to log element text content + change font style to italic 
highlightTitleEls.forEach((highlighttitleEL) => {
    // console.log(highlighttitleEL.textContent)
    //font-style HTML > fontStyle JavaScript 
    highlighttitleEL.style.fontStyle = 'italic'
})

//Select Quote of the Day paragraph and store it in a variable using # since it is an ID in HTML
const quoteDayEl = document.querySelector('#quote-of-the-day')
//Update the quote of the day paragrapgh 
quoteDayEl.textContent = 'Always start your mornings with a cup of Coffe then tackle the day!'
//Add a class to the quote of the day element 
quoteDayEl.classList.add('featured')
// console.log(quoteDayEl)


//Part 3: Replace the main photo
const mainPhotoEl = document.querySelector('#main-photo')
//Read image src + log it 
// console.log(mainPhotoEl.getAttribute('src'))
//Change img src | take note of this for comparison 
mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg')
//Update image alt
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe')
// console.log(mainPhotoEl)

//Part 4: Connect the background-colour button
//Selecting button element
const bgColorbtnEL = document.querySelector('#bg-color-btn')
//Selecing the body element - cached
const bodyEl = document.querySelector('body')
// console.log(bgColorbtnEL)

//color array 
let colors = ['bisque', 'lightsteelblue', 'lavender']

//Function to change background color when clicking the button
const handleBackgroundChange = () => {
    //count random number with math but * 3 based on the number of colors 
    let count = Math.floor(Math.random() * 3)
    // bodyEl.style.backgroundColor = 'lightsteelblue'
    bodyEl.style.backgroundColor = colors[count]
    
}
//event listener to call the function + when click
bgColorbtnEL.addEventListener('click', handleBackgroundChange)

// //Call the function
// handleBackgroundChange()

//Part 5: Rendering Cafe Specialties
// Cache menu elements
// const rosteLatteEl = document.querySelector('#rose-latte')
// const croissantEl = document.querySelector('#croissant')
// const cheesecakeEl = document.querySelector('#cheesecake')

//Cache button elements by their id
// const roseBtnEl = document.getElementById('#0')
// const croissantBtnEl = document.getElementById('#1')
// const cheesecakeBtnEl = document.getElementById('#2')

//Cache menu elements in an array
// const SpecialtyItems = [document.querySelectorAll('.specialty-status')]
// SpecialtyItems[0].textContent = 'Available'

//Update items stock text
// rosteLatteEl.textContent = 'Available'
// croissantEl.textContent = 'Sold Out'
// cheesecakeEl.textContent = 'Available'

//Button Event listeners
// roseBtnEl.addEventListener('click', () => {
//     rosteLatteEl.textContent = 'Sold Out'
// })

// croissantBtnEl.addEventListener('click', () => {
//     croissantEl.textContent = 'Sold Out'
// })

// cheesecakeBtnEl.addEventListener('click', () => {
//     cheesecakeEl.textContent = 'Sold out'
// })

//Cache menu Specialties items 
const specialtyElements = document.querySelectorAll('.specialty-status')
//Cache Croissant item with ID
const croissantElement = document.querySelector('.croissant')
//Cache restock Croissant button
const croissantBtnEl = document.querySelector('#restock-croissants-btn')
//Cache Sold out button class
const soldOutBtnElements = document.querySelectorAll('.sold-out-btn')
//Stock Status 
const statuses = ['Available', 'Sold Out', 'Available']

//Render function 
const statusRender = () => {
    //loop through statuses array 
    statuses.forEach((status, index) => {
        //assign statuses text to each item based on the index
        specialtyElements[index].textContent = status
    })
}

//Call render function 
statusRender()

//Loop through Sold out buttons 
soldOutBtnElements.forEach((btn, index) => {
    //event listener for click press
    btn.addEventListener('click', () => {
        //assign statuses as 'Sold Out'
        statuses[index] = 'Sold Out'
        //call function update status 
        statusRender()
    })
})

//Event listener Restock Croissants
croissantBtnEl.addEventListener('click', () => {
    statuses[1] = 'Available'
    statusRender()
})