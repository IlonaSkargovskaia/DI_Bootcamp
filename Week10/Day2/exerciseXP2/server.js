const express = require('express');
const app = express();

const user = {firstname: 'John',lastname: 'Doe'};

app.use('/', express.static(__dirname + '/public'));


app.get('/users', (req, res) => {
    res.json(user);
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})