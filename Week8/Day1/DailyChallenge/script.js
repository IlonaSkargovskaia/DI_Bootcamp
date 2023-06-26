// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.




const myform = document.forms.libform
myform.addEventListener("submit", getValues);

const shuffleBtn = document.querySelector("#shuffle-button")
shuffleBtn.addEventListener("click", showStory)

let objInfo = {};
let randomNum = 0
let othernum = 0;

function getValues(event) {
    event.preventDefault();
    isFormSubmitted = true;
    const allInputs = event.target.querySelectorAll("input");
    for (let inp of allInputs) {
        if (inp.value === "") {
            alert(`fill the form - missing element in ${inp.id}`)
            objInfo = {}
            return;
        }
        objInfo[inp.id] = inp.value;
    }
    showStory()
}


function showStory () {
    const valuesObj = Object.values(objInfo); //array of values
    const allStories = [`first story ${valuesObj[0]}  ${valuesObj[1]}`,
    `second story ${valuesObj[1]}  ${valuesObj[2]}`,  `third story ${valuesObj[1]}  ${valuesObj[0]}`]

    do {
        othernum = Math.floor(Math.random() * allStories.length);
    } while(randomNum === othernum)
    
    randomNum = othernum

    const spanElement = document.getElementById("story");
    spanElement.textContent = "";
    const text = allStories[randomNum]
    const textNode = document.createTextNode(text)
    spanElement.appendChild(textNode)
}