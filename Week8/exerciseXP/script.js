// Using a DOM property, retrieve the h1 and console.log it.
const title = document.querySelector('h1');
console.log(title);

// Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.querySelector('article');
const lastParagraph = article.lastElementChild.remove();
console.log(article);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const subtitle = document.querySelector('h2');
subtitle.addEventListener('click', changeBackground);

function changeBackground(){
    subtitle.style.background = 'red';
}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.querySelector('h3');
h3.addEventListener('click', hideElement);

function hideElement(){
    h3.style.display = 'none';
}


// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const btn = document.querySelector('button');
btn.addEventListener('click', boldText);

function boldText(){
    article.style.fontWeight = 'bold';
}


// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.

title.addEventListener('mouseover', changeFontSize);

function changeFontSize(){
    title.style.fontSize = `${Math.floor(Math.random() * 101)}px`;
}

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

const secondParagraph = document.querySelectorAll('p');
secondParagraph[1].addEventListener('mouseover', fadeOut);

function fadeOut(){
    secondParagraph[1].classList.add('p', 'fadeOut');
}



//Exercise 2 : Work With Forms
// Retrieve the form and console.log it.
const form = document.forms[0];
console.log(form);

// Retrieve the inputs by their id and console.log them.
const fName = form.elements['fname'];
console.log(fName);
const lName = form.elements['lname'];
console.log(lName);

// Retrieve the inputs by their name attribute and console.log them.
const fName2 = form.elements.fname;
console.log(fName2);
const lName2 = form.elements.lname;
console.log(lName2);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :
{/* <ul class="usersAnswer">
    <li>first name of the user</li>
    <li>last name of the user</li>
</ul> */}


// preventDefault stop behavior from the object "by default"

const buttonSubmit = form.elements['submit'];
const usersAnswer = document.querySelector('.usersAnswer');
console.log(usersAnswer);

buttonSubmit.addEventListener('click', btnSubmit);

function btnSubmit(e){
    e.preventDefault();

    let firstNameInput = form.elements['fname']; 
    let lastNameInput = form.elements['lname']; 

    if (firstNameInput.value !== '' && lastNameInput.value !== ''){
        let fLi = document.createElement('li');
        let fLiText = document.createTextNode(firstNameInput.value);
        let lLi = document.createElement('li');
        let lLiText = document.createTextNode(lastNameInput.value);

        fLi.appendChild(fLiText);
        lLi.appendChild(lLiText);
        usersAnswer.appendChild(fLi);
        usersAnswer.appendChild(lLi);
        

        console.log(firstNameInput.value);
        console.log(lastNameInput.value);
    }
    
    

        
}

