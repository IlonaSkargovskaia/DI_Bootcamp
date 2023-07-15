const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');


//public dir
app.use('/', express.static(__dirname + '/public'));

//access to parse req.body
app.use(express.urlencoded({ extended: true })); //form data
app.use(express.json()); //json data

app.get('/register', (req, res) => {
    const registerPath = path.join(__dirname, 'public/register.html');
    res.sendFile(registerPath);
});

app.get('/register', (req, res) => {
    const loginPath = path.join(__dirname, 'public/login.html');
    res.sendFile(loginPath);
});

app.post('/register', (req, res) => {
    const { name, lastName, email, username, password } = req.body;
    console.log(req.body);

    // Check if the username or password already exist
    const usersData = fs.readFileSync('users.json');
    const users = JSON.parse(usersData); //json to object
    const userExists = users.find(user => user.username === username || user.password === password);
    if (userExists) {
        res.send('error1'); // Username or password already exists
    }

    // Save the user to the JSON file
    const newUser = {
        name,
        lastName,
        email,
        username,
        password
    };
    users.push(newUser);

    fs.writeFileSync('users.json', JSON.stringify(users));

    res.send('register');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const usersData = fs.readFileSync('users.json');
    const users = JSON.parse(usersData);
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        res.send('error2'); // User not found
    }

    res.send('login');
});


app.listen(3000, () => {
    console.log('listen 3000');
});