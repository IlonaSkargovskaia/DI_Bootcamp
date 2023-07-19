import express from "express";
import cors from 'cors';

//access and call express
const app = express();
const PORT = 3000;
const users = [
    {id:1, name: 'Daniel', age: "26", country: "Israel"},
    {id:2, name: 'Sam', age: "30", country: "US"},
    {id:3, name: 'Marina', age: "28", country: "Israel"},
];



//parse incoming json from client (ex: client filled the form)
app.use(express.json())
//install by default to private policy
app.use(cors());


//open door for get request in browser
app.get('/', (req, res) => {
    //if we work with strings, html - send
    res.send(`
    <h1>Hello world</h1>
    <p>This is our Node.js Server</p>
    `);
});


app.get('/users', (req, res) => {
    //only for terminal
    console.log('Request Received');
    //.json automatically convert to json format
    res.json(users);
    //[{"id":1,"name":"Daniel","age":"26","country":"Israel"},{"id":2,"name":"Sam","age":"30","country":"US"},{"id":3,"name":"Marina","age":"28","country":"Israel"}]
})

//get haven't req.body

app.get('/users/:userId', (req, res) => {

    const userID = Number(req.params.userId);  //
    //console.log(userID); // if on client: ...:3000/users/1 then we get here '1' as json
    const user = users.find(item => item.id === userID); //user - object
    console.log(user);

    //if user find then we use status
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json('User not found');
    }

    //send back to the client json object {params:value from request} {"userId":"1"}
    //res.json(req.params);
})

//if user exist in array - we create a messages
const registerArray = [
    {username: 'dani123', password: 'dani123'},
    {username: 'dani', password: '1234'},
]

//req.body is only in post 
app.post('/register', (req, res) => {
    const {username, password} = req.body; // точто ввел пользователь в форме мы получаем как объект

    // const username = 'dani2';
    // const password = 'dani';

    const existingUser = registerArray.find(user => user.username === username);

    if (existingUser){       
        res.status(400).json('Username already exist');
    } else {
        const newUser = {username, password};
        registerArray.push(newUser);
        res.status(200).json('Welcome, registered successfully');
        console.log(registerArray);
    }

    // //to server side
    console.log('post request recieved');
    // //send response to client
    // res.json('post request recieved')
})



app.listen(PORT || 3005, () => {
    console.log(`Listening on ${PORT}`);
})
