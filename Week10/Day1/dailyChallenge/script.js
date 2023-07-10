const {largeNumber, currDate} = require('./main.js');

const b = 5;
const result = largeNumber + b

console.log(result);


//Part2

//creating first webserver
// const http = require('http');

// const server = http.createServer((request, response) => {
//     //console.log('Get the request from client');
//     response.setHeader('Content-Type', 'text/html');
//     response.end(`<html><body><p>My Module is: <br>${result} <br> <h1>Hi there at the frontend</h1></body></html>`);
// })

// server.listen(3000, () => {
//     console.log('I\'m listening');
// });


//Part3

const http = require('http');

const server2 = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.end(`<html><body><p>The date and time are currently: ${currDate()}</p></body></html>`);
})

server2.listen(8080, () => {
    console.log('I\'m listening');
});