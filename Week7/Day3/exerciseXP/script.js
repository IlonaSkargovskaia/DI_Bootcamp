const people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.shift();
console.log(people);

// Write code to replace “James” to “Jason”.
people[people.length - 1] = 'Jason'
console.log(people);

// Write code to add your name to the end of the people array.
people.push('Ilona')
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let index = people.indexOf("Mary")
console.log(index);

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];

console.log(people.slice(1,-1));

// Write code that gives the index of “Foo”. Why does it return -1 ?
let index2 = people.indexOf("Foo")
console.log(index2);
// -1 because "Foo" not found = false

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length - 1]
console.log(last)
// the array index numbering starts with 0. i.e. 1st element's index would 0. Therefore the last element's index would be array length-1.


// Using a loop, iterate through the people array and console.log each person.

for (let i of people) {
    console.log(i)
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” 
for (let i of people) {
    console.log(i);
    if (i === "Devon"){
        break;
    }
}


// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["white", "black", "pink", "yellow", "blue"]
let sfx = ['st', 'nd', 'rd', 'th']

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i+1} choice is ${colors[i]}`)
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
for (let i = 0; i < colors.length; i++) {
    if (i == 0) {
        console.log(`My ${i+1}${sfx[0]} choice is ${colors[i]}`)
    } else if (i == 1) {
        console.log(`My ${i+1}${sfx[1]} choice is ${colors[i]}`)
    } else if (i == 2) {
        console.log(`My ${i+1}${sfx[2]} choice is ${colors[i]}`)
    } else {
        console.log(`My ${i+1}${sfx[sfx.length - 1]} choice is ${colors[i]}`)
    }
    
}


// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

let answer = prompt("Write the number: ")
console.log(typeof answer)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


do {
    answerLoop = prompt("Write the number: ")
    console.log(answerLoop)
}
while (parseInt(answerLoop) < 10);