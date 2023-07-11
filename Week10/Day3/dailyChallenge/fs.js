const fs = require('fs');


fs.readFile('RightLeft.txt', 'utf-8', (err, data) => {
    if (err) return console.log(err)

    const arr = data.split('');
    let result = 0;
    let counter = 0;
    for (let item of arr){
        counter++;
        if (item === '>') {
            result++;
        } else if (item === '<') {
            result--;
        } if (result == -1) {
            console.log(`${result} steps to the right`);
            console.log(`The first time on the left side is in: ${counter} steps`);
            break
        }
    }
 
})