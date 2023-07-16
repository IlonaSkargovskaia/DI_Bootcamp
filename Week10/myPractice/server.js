//filesystem
// const fs = require('fs');

// //read
// // let result = fs.readFileSync('some.txt', 'utf-8')
// // console.log(result);

// // //write and add to text what already exist
// // fs.writeFileSync('some.txt', result + '\nHello World!')


// //async read
// let result2 = fs.readFile('some.txt', 'utf-8', (err, data) => {
//     //async write and add to text what already exist
//     fs.writeFile('some.txt', data + '\nSome text', (err, data) => {
//         console.log('All works');
//     })
// });

const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//parse JSON data from script.js in the request body in POST
app.use(express.json())

//отслеживаем главную страницу
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//handle data from client script.js
app.post('/submit', (req, res) => {
    // FormData = from attr name in html - key and value - what input user inside
    const formData = req.body;
    console.log(formData);    //{ name: 'Maks', email: 'ilona.skars@gmail.com' }
    
    //data = info what already exist inside users.json
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Error while saving user' });
        }

        const users = JSON.parse(data);
        users.push(formData);

        const jsonData = JSON.stringify(users);

        fs.writeFile('users.json', jsonData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ error: 'Error while saving user' });
            }

            res.json({msg: 'Form submitted successfully'})
        })
    })
    
    
});




//dynamic parameters
app.get('/user/:username/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}. User name: ${req.params.username}`)
})

app.listen(3000);



