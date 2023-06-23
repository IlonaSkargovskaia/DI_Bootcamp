// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

function isBlank(string) {
    console.log(string === '' ? true : false)
}

isBlank('abc');
isBlank('');


// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName(string) {

    if (string.includes(' ')){
        let resultString = string.split(' '); //['Robin', 'Singh']
        console.log(resultString);

        let newWord = resultString[0] + ' ' + resultString[1].slice(0, 1) + '.';
        console.log(newWord);


    } else {
        console.log(string);
    }
    
}

abbrevName('Ilona Skargovskaya');

// 3

function swapCase(string){
    let resultString = '';
    for (let letter of string){
        if (letter.toUpperCase() === letter){
            resultString += letter.toLowerCase();           
        } else if(letter.toLowerCase() === letter) {
            resultString += letter.toUpperCase();  
        }
        
    }
    console.log(resultString);
}

swapCase('The Quick Brown Fox');

// 4

function isOmnipresent(arr, num){

    for (let a of arr) {
        if(!a.includes(num)){
            return false;
        }
    }
    return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));


// Exercise 5 : Red Table
// Instructions
// Copy the code above and write some Javascript code to color all diagonal table cells in red.

let table = document.body.firstElementChild;

let trs = table.querySelectorAll('tr');

// hard coding
// for (let tr of trs){
//     let tds = tr.querySelectorAll('td');
    
//     if (tr.rowIndex == 0){
//         for (let td of tds){
//             if (td.cellIndex == 0){
//                 td.style.background = 'red';
//             }
//         }
//     }

//     if (tr.rowIndex == 1){
//         for (let td of tds){
//             if (td.cellIndex == 1){
//                 td.style.background = 'red';
//             }
//         }
//     }

//     if (tr.rowIndex == 2){
//         for (let td of tds){
//             if (td.cellIndex == 2){
//                 td.style.background = 'red';
//             }
//         }
//     }

//     if (tr.rowIndex == 3){
//         for (let td of tds){
//             if (td.cellIndex == 3){
//                 td.style.background = 'red';
//             }
//         }
//     }

//     if (tr.rowIndex == 4){
//         for (let td of tds){
//             if (td.cellIndex == 4){
//                 td.style.background = 'red';
//             }
//         }
//     }
    
// }

// other variant

for (let i = 0; i < trs.length; i++) {
    let cells = trs[i].querySelectorAll('td');
    let diagonal = cells[i];
    diagonal.style.background = 'red';
}

