const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`<html>
    <body>
        <h1>This my first response</h1>
        <h2>This my second response</h2>
        <p>This my third response</p>
    </body>
    </html>`);
    response.end();
})

server.listen(8080, () => {
    console.log('I\'m listening');
});


