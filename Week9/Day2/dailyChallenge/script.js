// //1

// function makeAllCaps(arr) {
//     return new Promise((resolve, reject) => {
        
//         arr.forEach((element) => {
//             if (typeof element === 'string') {
//                 const uppercasedWords = arr.map((word) => word.toUpperCase());
//                 resolve(uppercasedWords);
//             } else {
//                 reject(`Not every word is a string`);
//             }
//         })
//     })
// };

// function sortWords(upperArr) {
//     return new Promise((resolve, reject) => {
//         if (upperArr.length > 4) {
//             resolve(upperArr.sort())
//         } else {
//             reject(`Length of arr less than 4`);
//         }
//     })
// }


// makeAllCaps([1, "pear", "banana"])
// //if in first func - resolve then go to sortWords
//     .then((upperArr) => sortWords(upperArr))
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// makeAllCaps(["apple", "pear", "banana"])
//     .then((upperArr) => sortWords(upperArr))
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//     .then((upperArr) => sortWords(upperArr))
//     .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//     .catch(error => console.log(error))



//2

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`



function toJs(jsonStr){
    return new Promise((resolve, reject) => {
        const jsonToObject = JSON.parse(jsonStr);
        if (Object.keys(jsonToObject).length !== 0){
            resolve(jsonToObject);
        } else {
            reject(`Object is empty`);
        }
        
    })
}

function toMorse(morseJS) {
    let input = prompt('Write word or sentence');
    const morseArr = [];
    return new Promise((resolve, reject) => {
        
        for (let letter of input) {

            if (Object.keys(morseJS).includes(letter)) {
                morseArr.push(morseJS[letter]);
            } else {
                reject(`This letter ${letter} doesn't exist`);
            }
        }
        
        resolve(morseArr);
        
    })
}


function joinWords(morseTranslation){
    document.body.innerHTML = morseTranslation.join('<br>');
}




toJs(morse)
    .then(morseJS => toMorse(morseJS))
    .then(result => joinWords(result))
    .catch(err => console.log(err))