const http = require('http');
const { user } = require('./object.js');

const server = http.createServer((req, res) => {
    //check if the request URL is equal to /welcome.
    if (req.url == '/welcome') { 
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(user));
    } else {
        res.end();
    }
    
})

server.listen(8080, () => {
    console.log('server is listening on port 3000')
})

