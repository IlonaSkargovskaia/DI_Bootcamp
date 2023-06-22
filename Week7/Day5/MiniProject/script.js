function playTheGame(){
    const askPlayGame = confirm('Do you want to play game? "');

    if (askPlayGame === false) {
        alert('No problem, Goodbye!');
    } else {
        const userNum = +(prompt("Write a number in range 0 - 10: "));

        if (isNaN(userNum)){
            alert('Sorry, Not a number, Goodbye');
        } else if (userNum > 10 || userNum < 0){
            alert('Sorry its not a good number, Goodbye');
        } else {
            const computerNumber = Math.floor(Math.random() * 11);
            console.log(computerNumber);
        }
    }
}