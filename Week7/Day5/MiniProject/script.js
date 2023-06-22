function playTheGame(){
    const askPlayGame = confirm('Do you want to play game? "');

    if (askPlayGame === false) {
        alert('No problem, Goodbye!');
    } else {
        let userNum = +(prompt("Write a number in range 0 - 10: "));

        while (isValidNumber(userNum) === false) {
            alert('Sorry, that is not a valid number. Please try again.');
            userNum = +(prompt("Write a number in the range of 0 - 10: "));
          }
      
        const computerNumber = Math.floor(Math.random() * 11);
        compareNumbers(userNum, computerNumber);
        
    }
}

function isValidNumber(num) {
    return !isNaN(num) && num >= 0 && num <= 10;
}

function compareNumbers(userNum, computerNumber){
    
    for (let i = 0; i < 3; i++) {
        if (i === 2 && userNum !== computerNumber) {
            alert("You lose!");
            break;
        } else if (userNum === computerNumber) {
            alert('WINNER!');
            break;
        } else if (userNum > computerNumber){
            alert('Your number is bigger then the computers, guess again');
            userNum = +(prompt("Write a number in range 0 - 10: "));
        } else if (userNum < computerNumber){
            alert('Your number is smaller then the computers, guess again');
            userNum = +(prompt("Write a number in range 0 - 10: "));
        } 
    }   
    
}