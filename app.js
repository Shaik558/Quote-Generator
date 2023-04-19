// https://api.quotable.io/random --> JSON Format --> javascript object

// JSON and Javascript Object

const myButton = document.getElementById("btn1")

const myQuote = document.getElementById("myquote")
const myAuthor = document.getElementById("myauthor")


const copy = document.getElementById("copy")
const volume = document.getElementById("volume")



const myContainer = document.getElementById("container")
const myLoader = document.getElementById("loader")


function first()
{
// container should be visible --> loader should not be visible
    myContainer.hidden = false
    myLoader.hidden = true
}

function second()
{
// Loader should be visible --.> container should not be visible
    myLoader.hidden = false
    myContainer.hidden = true
}

first()

myButton.addEventListener("click", async function()
{
    //Logic where container should be hidden, loader should be visible
    second()
    const response = await fetch("https://api.quotable.io/random")
    let quotes = await response.json()

    myQuote.innerText = quotes.content//<span id="myquote"></span>
    myAuthor.innerText = quotes.author// <span id="myauthor"></span>
    first()
})
// 2 second

copy.addEventListener("click", function()
{
    //Logic to copy the quote
    navigator.clipboard.writeText(myQuote.innerText)
    // Where there is a will, there is way
    // Do not go where the path may lead, go instead where there is no path and leave a trail.
})

volume.addEventListener("click", function()
{
    //Logic to read out that quote
    let speech = new SpeechSynthesisUtterance(myQuote.innerText)
    speechSynthesis.speak(speech)
})















