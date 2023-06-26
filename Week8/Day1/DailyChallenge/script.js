// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.



// const form = document.forms[0];

// const inputNoun = form.elements.noun;
// const inputAdj = form.elements.adjective;
// const inputPerson = form.elements.person;
// const inputVerb = form.elements.verb;
// const inputPlace = form.elements.place;

// //values
// const textNoun = inputNoun.value;
// const textAdj = inputAdj.value;
// const textPerson = inputPerson.value;
// const textVerb = inputVerb.value;
// const textPlace = inputPlace.value;


// const story = document.querySelector('#story');
// const btnLib = document.querySelector('#lib-button');
// const btnShuffle = document.querySelector('#shuffle');

// btnLib.addEventListener('click', createStory);
// // btnShuffle.addEventListener('click', shuffle);


// function createStory(event) {
//     event.preventDefault();

//     if (inputNoun !== '' ){
        
//         story.textContent += `This ${textNoun} ${textAdj} found out that ${textPerson} ${textVerb} around the ${textPlace}!`;
//     } else {
//         alert('Fill all fileds in form to create your story');
//     }

    
    
    
// }

// function shuffle() {

//     if (inputNoun !== '' && inputAdj !== '' && inputPerson !== '' && inputVerb !== '' && inputPlace !== ''){

//         let textArray = [
//             `This ${inputAdj} ${inputNoun} found out that ${inputPerson} ${inputVerb} around the ${inputPlace}!`, 
//             `Second ${inputAdj} ${inputNoun} found out that ${inputPerson} ${inputVerb} around the ${inputPlace}!`,
//             `Third ${inputAdj} ${inputNoun} found out that ${inputPerson} ${inputVerb} around the ${inputPlace}!`
//         ];

//         for (let text of textArray) {
//             story.textContent += Math.floor(Math.random() * 3);
//         }

        
//     } else {
//         alert('Fill all fileds in form to create your story');
//     }

// }





const form = document.forms[0];
form.addEventListener('submit', getValues);

function getValues(event){
    event.preventDefault();
    // const arrValues = [];
    const objValues = {};
    const allInputs = event.target.querySelectorAll('input');
    
    for (let input of allInputs){
        //аналог если все инпут пустые 
        if(input.value === ''){
            alert('Fill the form');
            //чтобы остановить функцию
            return;
        }
        objValues[input.id] = input.value;
    }

    //чтобы использовать все переменные в другой функции
    createStory(objValues)

}


function createStory(objValues) {


    const story = document.querySelector('#story');

    story.textContent += `This ${objValues['adjective']} ${objValues['verb']} found out that ${objValues['person']} ${objValues['verb']} around the ${objValues['place']}!`;
    
    
    
}
