// document.forms
// HTMLCollection [form#contactform, contactform: form#contactform]0: form#contactformcontactform: form#contactformlength: 1[[Prototype]]: HTMLCollection
// document.forms[0]
// <form id=​"contactform">​…​</form>​
// document.forms.contactform
// <form id=​"contactform">​…​</form>​

// const myform = document.forms.contactform;
// const myformtwo = document.forms[0];

//same
//  id="username" is the id of the input
const inputUsername = document.forms.contactform.username
const inputUsernameTwo = document.forms.contactform.elements[0]
const inputUsernameThree = document.forms.contactform.elements.username

const inputUser = document.forms[0].username
console.log(inputUser.value); //'john'

// form 
const myform = document.forms[0];
myform.addEventListener("submit", getValuesForm);

function getValuesForm (event) {
    event.preventDefault(); //stop the form from refreshing the page
    console.log(event.target);
    const valueUsername = event.target.username.value;
    const valueAge = event.target.age.value;
    console.log(valueAge, valueUsername);
}

// //working on an input
const cityInput = document.querySelector("#city");
cityInput.addEventListener("input", retrieveData);

function retrieveData(event) {
    console.log(event.target.value);
}

