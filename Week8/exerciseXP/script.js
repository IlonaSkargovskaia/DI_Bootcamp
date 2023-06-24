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