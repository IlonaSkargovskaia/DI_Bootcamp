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
