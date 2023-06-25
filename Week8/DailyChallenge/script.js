// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.



const form = document.forms[0];
form.addEventListener('submit', createStory);


function createStory(event) {
    event.preventDefault();

    
    const inputNoun = form.elements.noun.value;
    const inputAdj = form.elements.adjective.value;
    const inputPerson = form.elements.person.value;
    const inputVerb = form.elements.verb.value;
    const inputPlace = form.elements.place.value;

    // const btn = form.elements['lib-button'];
    // console.log(btn);


    const story = document.querySelector('#story');

    if (inputNoun !== '' && inputAdj !== '' && inputPerson !== '' && inputVerb !== '' && inputPlace !== ''){
        story.textContent += `This ${inputAdj} ${inputNoun} found out that ${inputPerson} ${inputVerb} around the ${inputPlace}!`;
    } else {
        alert('Fill all fileds in form to create your story');
    }
    
    
}
