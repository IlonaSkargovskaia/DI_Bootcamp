// function getUserInfo(username){
//     return username;
// }

// getUserInfo('Ilona');

// //expression
// const getUser = function(username) {
//     return username;
// }

// getUser('Ilona');

// //arrow
// const getUserInfo = (username) => username;

// getUserInfo('Ilona');



// //2

// function checkAge(age){
//     if (age > 18) {
//         return 'You can drive';
//     } else {
//         return 'You cannot drive'
//     }
// }

// //expression

// const chkAgeUser = function(age) {
//     if (age > 18) {
//         return 'You can drive';
//     } else {
//         return 'You cannot drive'
//     }
// }

// //arrow

// const checkUserAge = age => age > 18 ? 'You can drive' : 'You cannot drive';




function starWars(spaceship) {
    const characters = [];
    let info = '';

    function createCharacter(firstName, lastName = 'Smith') {
        info = `${firstName} ${lastName}`;
        characters.push(info);
    }

    createCharacter('Ilona');
    createCharacter('Dima');
    console.log(characters);

    function displayCharacter(){
        for (let character of characters) {
            document.body.innerHTML += `${character} are in ${spaceship} <br />`;
        }
        
    }
    displayCharacter()
}

starWars('The Devastator');
starWars('Republic Attack Cruiser');