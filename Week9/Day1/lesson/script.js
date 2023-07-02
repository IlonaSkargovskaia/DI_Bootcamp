// function addition (a, b, c) {
//     return a + b + c
// }

// addition(2,3,4)

// // CURRYING

// function addition (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// const result = addition(2)(3)(4)
// console.log(result);


// function changeMoney (currency1) {
//     return function (amount) {
//         return function (rate) {
//             return `I change ${currency1} : ${amount*rate}`
//         }
//     }
// }

// // const changeMoney = (currency1) => (amount) => (rate) => `I change ${currency1} : ${amount*rate}`



// const dollars = changeMoney("dollars");
// const result1 = dollars(100)(1.4)
// const result2 = dollars(30)(1.3)
// const result4 = dollars(12)(1.1)
// console.log(result2);

// const euros = changeMoney("euros");
// const result12 = dollars(100)(1.4)
// const result22 = dollars(30)(1.3)
// const result42 = dollars(12)(1.1)

// function volume(length) {
//     return function (weight) {
//         return function (height){
//             return length * weight * height;
//         }
//     }
// }

// const product = volume(10);
// const result = product(3)(5);
// const result2 = product(4)(9);
// console.log(result, result2);


// const product2 = volume(10)(2);
// const result3 = product2(3);
// const result4 = product2(7);
// console.log(result3, result4);



let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`

const toObj = JSON.parse(jsonString);
console.log(toObj);

const firstQuestion = toObj['quiz']['sport']['q1']['options'];
firstQuestion.forEach(el => console.log(el));

const toJson = JSON.stringify(toObj, null, 2);
console.log(toJson);