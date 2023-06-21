// const colors = ["blue", "lightpink", "red"];

// //display each letter of each color 

// // loop through the array
// for (let i = 0; i<colors.length; i++){
//     console.log("the color is : ", colors[i]);
//     // loop through each item of the array
//     for (let j = 0; j<colors[i].length; j++) {
//         console.log(colors[i][j]);
//     }
// }

// 1st outer loop
// i = 0
// i < 3 --> true
// -> enter the loop
// --> "blue"

//     1st inner loop
//         j = 0
//         j < 4 --> true
//         --> enter the loop
//         --> "blue"[0] --> "b"
    
//     2nd inner loop
//         j = 1
//         j < 4
//         --> enter the loop
//         --> "blue"[1] --> "l"

//     3rd inner loop
//         j = 2
//         j < 4
//         --> enter the loop
//         --> "blue"[2] --> "u"
    
//     4th inner loop
//         j = 3
//         j < 4
//         --> enter the loop
//         --> "blue"[3] --> "e"
    
//     5th inner loop
//         j = 4
//         j < 4 --< we go out of the inner loop

// 2nd outer loop
// i = 1
// i < 3 --> true
// -> enter the loop
// --> "lightpink"


// ternary operator

// const isHappy = true;
// let action;

// if (isHappy) { //if true
//     action = 'got to the beach';
// } else {
//     action = 'stay at home';
// }

// console.log(action);


// condition ? if the condition is true : if false

// const isHappy = true;
// const action = isHappy ? 'beach' : 'home';
// console.log(document);
// document.body.style.backgroundColor = "lightblue"

const username = "John"
const isLoggedIn = true

if (username === "John" && isLoggedIn) {
    document.body.firstElementChild.textContent = `Hello ${username}`
} else {
    document.body.firstElementChild.textContent = `Hello New User`
}

// firstElementChild
// children --> list
// lastElementChild
// parentElement

// document.body.firstElementChild.parentElement - find the parent of the firstchild
// document.body.firstElementChild.parentElement - find the parent of the firstchild

const color = prompt("give me a color");
// change the background color of the h1
const title = document.body.firstElementChild;
title.style.backgroundColor = `rgb(${color})`;

// 

//CREATE ELEMENTS TO THE DOM

// //1. Retrieve where I want to add the paragraph
const container = document.body.firstElementChild;

//2. Create the element
const paragraph = document.createElement("p");

//3. Create the content of the paragraph
const content = document.createTextNode("Hello in the paragraph");

//4. add the text to the paragraph
paragraph.appendChild(content);

//5. add the paragraph to the div
container.appendChild(paragraph);


const fruits = ["melon", "pear", "apple"];

// i want to create 1 li per fruit and add it to the ul

//1. retrieve the ul
const containerTwo = document.getElementById("all_fruits");

for (let fruit of fruits) {
    //2. create the li
    const newLi = document.createElement("li");
    //2. add a class to the li
    newLi.classList.add("ocean", "wrap");
    //3. create the text
    const text = document.createTextNode(fruit);
    //4. append the text to the li
    newLi.appendChild(text);
    //5. append the li to the ul
    containerTwo.appendChild(newLi);
}



// 1. The div DOM node?
const divOne = document.body.firstElementChild;
const divOneAgain = document.body.children[0];
// console.log(divOne, divOneAgain)

// 2. The ul DOM node?
const ulOne = document.body.children[1];
const ulOneAgain = divOne.nextElementSibling;
// console.log(ulOne, ulOneAgain)

// 3. The second li (with Pete)?
const liTwo = ulOne.children[1];
const liTwoAgain = ulOne.lastElementChild;
// console.log(liTwo, liTwoAgain)


//element by id
const myDiv = document.getElementById("container");

const allLi = document.getElementsByTagName("li"); //always get a list
console.log(allLi); //list

const allElementsWithClassSun = document.getElementsByClassName("sun");
console.log(allElementsWithClassSun); //list

for (let elem of allElementsWithClassSun) {
    console.log(elem);
}

//QUERY SELECTOR

//all paragraph in the container div
const allParagraphInContainerDiv = document.querySelectorAll("#containertwo p");
console.log(allParagraphInContainerDiv);

// //all paragraph on the page
const allP = document.querySelectorAll("p")

// //find element with id wrapper
const divwrapper = document.querySelector("#wrapper")

//all paragraph in the container div
const allParagraphs = document.querySelectorAll("#containertwo p");
console.log(allParagraphs);

for (let item of allParagraphs){
    item.textContent += "----new text----"
}