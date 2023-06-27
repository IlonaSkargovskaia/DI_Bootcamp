// const prices = [10, 23, 5];

// let sum = 0;


// for (let i = 0; i < prices.length; i++) {
//     sum += prices[i];
// }

// console.log(sum);

// let sumArr = 0;
// prices.forEach((el) => sumArr += el)

// console.log(sumArr);


// //2
// function doubleValues(arr) {
    
//     arr.forEach((el, index) => {
//        arr[index] = el * 2;
//     })

//     console.log(arr);
// }

// doubleValues([1,2,3]);




// function vowelCount(string) {
//     let obj = {};
//     const vowels = ['a', 'o', 'e', 'i', 'u'];
//     const arrLetters = string.toLowerCase().split('');

//     arrLetters.forEach((letter) => {
//        if (vowels.includes(letter) ) {
//             if (letter in obj) {
//                 obj[letter] += 1;
//             } else {
//                 obj[letter] = 1;
//             }
//         }
//     });
    
// }

// vowelCount('Elie');



// const famousPeople = [
//     {
//         name: "Angelina Jolie",
//         job: "actor",
//         age: 80
//     },
//     {
//         name: "Georges Clooney",
//         job: "actor",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         job: "actor",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         job: "singer",
//         age: 16
//     },
//     {
//         name: "Britney Spears",
//         job: "singer",
//         age: 100
//     }
// ]

// const names = famousPeople.map((element) => element['name']);
// console.log(names);

// //new Array
// const info = famousPeople.map((element) => {
//     const newObj = {};
//     newObj['namePerson'] = element['name'];
//     newObj['jobPerson'] = element['job'];
//     return newObj;
// })
// console.log(info);



// const container = document.querySelector('#container');

// info.forEach((element) => {
//     const newP = document.createElement('p');
//     const newText = document.createTextNode(`Name of actor: ${element['namePerson']} work as ${element['jobPerson']}`);

//     newP.appendChild(newText);
//     container.appendChild(newP);
// })


const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

const positiveNumbers = numbers.filter((el) => el > 0);
console.log(positiveNumbers);


const characters = [
    { name: 'James T. Kirk', series: ['Star Trek'] },
    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
 ];

const newCharacter = characters.filter((element) => {
        return element.series.includes('Star Trek: The Next Generation');
})
console.log(newCharacter);









const people = ["John","Lea","Tom"];

const acronym = people.reduce((accumulator, currentValue) => {
    return accumulator+currentValue[0]
}, "")

console.log(acronym);








const students = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55},
    {name: 'John', score: 75}
];

const sum = students.reduce((acc, element) => {
    return acc + element['score'];
}, 0);

console.log(sum);