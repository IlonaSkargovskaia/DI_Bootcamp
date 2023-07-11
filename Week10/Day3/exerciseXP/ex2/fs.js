const fs = require('fs');

fs.writeFile('data.txt', 'Bla bla', 'utf-8', (err) => {
    if(err) return console.log(err);
})

fs.appendFile('data.txt', ', more bla bla bla', 'utf-8', err => {
    if(err) return console.log(err);
})

fs.unlink('data.txt', err => {
    if(err) return console.log(err);
})