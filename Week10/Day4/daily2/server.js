import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.post('/register', (req,res) => {
    console.log(req.body); //{name: 'Ilona', lastName: 'Skargovskaya', email: 'ilona.skars@gmail.com', username: 'jordan', password: '123'}
    const {name, lastname, email, username, password} = req.body;

    
    const readFile = fs.readFileSync('users.json');
    //i'll get json and need to convert to obj - parse it
    const users = JSON.parse(readFile);

    const existUser = users.find(item => item.username === username && item.password === password);

    if (existUser) {
        res.status(400).json('User already exist');
    }

    const newUser = {name, lastname, email, username, password}
    users.push(newUser);
    res.status(200).json(newUser);
    fs.writeFileSync('users.json', JSON.stringify(users)); 
   
})


app.listen(PORT || 3001, () => {
    console.log(`listening ${PORT || 3001}`);
})