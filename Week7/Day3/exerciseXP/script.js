const people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.shift();
console.log(people);

// Write code to replace “James” to “Jason”.
people[people.length - 1] = 'Jason';
console.log(people);

// Write code to add your name to the end of the people array.
people.push('Ilona');
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let index = people.indexOf("Mary");
console.log(index);

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];

console.log(people.slice(1,-1));

// Write code that gives the index of “Foo”. Why does it return -1 ?
let index2 = people.indexOf("Foo");
console.log(index2);
// -1 because "Foo" not found = false

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length - 1];
console.log(last);
// the array index numbering starts with 0. i.e. 1st element's index would 0. Therefore the last element's index would be array length-1.


// Using a loop, iterate through the people array and console.log each person.

for (let i of people) {
    console.log(i);
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
    console.log(`My ${i+1} choice is ${colors[i]}`);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
for (let i = 0; i < colors.length; i++) {
    if (i == 0) {
        console.log(`My ${i+1}${sfx[0]} choice is ${colors[i]}`);
    } else if (i == 1) {
        console.log(`My ${i+1}${sfx[1]} choice is ${colors[i]}`);
    } else if (i == 2) {
        console.log(`My ${i+1}${sfx[2]} choice is ${colors[i]}`);
    } else {
        console.log(`My ${i+1}${sfx[sfx.length - 1]} choice is ${colors[i]}`);
    }
    
}


// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// let answer = prompt("Write the number: ")
// console.log(typeof answer)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


// do {
//     answerLoop = prompt("Write the number: ")
//     console.log(answerLoop)
// }
// while (parseInt(answerLoop) < 10);


// Ex4. Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.

console.log(building['numberOfFloors']);

// Console.log how many apartments are on the floors 1 and 3.
console.log(building['numberOfAptByFloor']['firstFloor']);
console.log(building['numberOfAptByFloor']['thirdFloor']);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building['nameOfTenants'][1]);
console.log(building['numberOfRoomsAndRent']['dan'][0]);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

sum = building['numberOfRoomsAndRent']['sarah'][1] + building['numberOfRoomsAndRent']['david'][1]
danRent = building['numberOfRoomsAndRent']['dan'][1]

if ( sum > danRent){
    danRent = 1200
}

console.log(danRent)


// Ex.5 Family
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
let family = {
    mother : 'Julia',
    father : 'John',
    children : 'Kris'
}

for(let i in family) {
    console.log(i);
}

for(let i in family) {
    console.log(family[i]);
}


// Exercise 6 : Rudolf

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

let finalString = '';

for(let i in details){
    finalString += i + ' ' + details[i] + ' ';
}

console.log(finalString)



// Exercise 7 : Secret Group

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let sortNames = names.sort();
let finalSocietyStr = ''

for(let i in sortNames){
    finalSocietyStr += sortNames[i][0];
}

console.log(finalSocietyStr);


// XP Gold

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i in numbers) {
    if (i % 3 == 0){
        console.log("True");
    } else {
        console.log("False");
    }
}


// 2

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

let userName = prompt("Write you name: ");

// check if key exist
const checkIfKeyExist = (objectName, keyName) => {
    let keyExist = Object.keys(objectName).some(key => key === keyName);
    if (keyExist == true) {
        console.log(`Hi! I'm ${keyName}, and I'm from ${objectName[keyName]}`);
    } else {
        console.log(`Hi! I'm guest`);
    }
};
  
console.log(checkIfKeyExist(guestList, userName));



// 3

let age = [20,5,12,43,98,55];
let sumArr = 0;

for (let i = 0; i < age.length; i++) {
    sumArr += age[i]; 
}

console.log(sumArr);


let max = age[0];
for(let i = 0; i < age.length; i++){
    
    if(age[i] > max){
        max = age[i];
    }
}
console.log(max);
