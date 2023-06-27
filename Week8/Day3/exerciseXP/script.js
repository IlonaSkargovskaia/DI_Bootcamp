// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, index) => {
    console.log(`#${index + 1} choice is ${element}`)
})

const checkOne = colors.some((element) => element === 'Violet' ? 'Yeah' : 'No');
console.log(checkOne);



// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.


const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors2.forEach((color, index) => { index < 3 ? 
    console.log(`${index+1}${ordinal[index]} color is ${color}`) : 
    console.log(`${index+1}${ordinal[0]} color is ${color}`);
});


// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// ------2------
// const country = "USA";
// console.log([...country]);

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);



const users = [
        { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
        { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
        { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
        { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
        { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
        { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
        { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
    ];

const welcomeStudents = users.map((element) => `Hello ${element['firstName']}`)
console.log(welcomeStudents);

const filterResidents = users
                .filter((element) => element['role'] === 'Full Stack Resident')
                .map((element) => element['lastName']);
console.log(filterResidents);



// Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Use the reduce() method to combine all of these into a single string.


const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const newEpic = epic.reduce((acc, element) => {
    return `${acc} ${element}`;
})

console.log(newEpic);


// Using this object:

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)



const students = [
        {name: "Ray", course: "Computer Science", isPassed: true}, 
        {name: "Liam", course: "Computer Science", isPassed: false}, 
        {name: "Jenner", course: "Information Technology", isPassed: true}, 
        {name: "Marco", course: "Robotics", isPassed: true}, 
        {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
        {name: "Jamie", course: "Big Data", isPassed: false}
    ];


const congrats = students.filter((element) => element['isPassed']).forEach((student) => console.log(`Good job ${student['name']}, you passed the course in ${student['course']}`));
                    
console.log(congrats);

