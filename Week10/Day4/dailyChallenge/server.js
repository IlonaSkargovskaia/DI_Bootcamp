// import express from 'express';
// import path from 'path';
// import {promises as fsPromises} from "fs" ;
// const app = express();
// const __dirname = path.resolve(); //create dirname

// //needed for put and post methods
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // we need this line to make the files in public folder available
// app.use(express.static(__dirname + "/public"));

// app.get("/register", (req, res) => {
//     res.sendFile(__dirname + "/public/register.html")
// })

// app.get("/login", (req, res) => {
//     res.sendFile(__dirname + "/public/login.html")
// })

// app.post("/register", async (req, res) => {
//     console.log("in register");
//     const dataBody = req.body;
//     const readFileResponse = await readuser(dataBody);
//     res.json(readFileResponse);
// })


// app.post("/login", async (req, res) => {
//     console.log("in login");
//     const dataBody = req.body;
//     const readFileResponse = await readuser(dataBody);
//     res.json(readFileResponse);
// })

// async function readuser (currentUser) {
//     console.log("in readuser");
    
//     const data = await fsPromises.readFile(__dirname + "/public/data.json")
//     .catch((err) => console.error('Failed to read file', err));
    
//     const datausers = JSON.parse(data); //array of objects

//     console.log("datausers", datausers);
    
//     const findUser = datausers.findIndex((element) => 
//             element.username === currentUser.username)

//     console.log("findUser", findUser);

//     if (findUser >= 0) {
//         console.log("User already exists");
//         return "User already exists";
//     } else {
//         datausers.push(currentUser);
//         console.log("User added successfully", datausers);
//         //VERY IMPORTANT TO STRINGIFY THE DATA SENT TO WRITE FILES
//         await fsPromises.writeFile(__dirname + "/public/data.json", JSON.stringify(datausers));
//         return "User added successfully";
//     }
// }

// app.listen("3000", () => {
//     console.log("SERVER LISTENING 3000");
// })

import express from 'express';
import * as fs from 'fs';
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Read users from JSON file
  const data = fs.readFileSync('users.json');
  const users = JSON.parse(data);

  // Check if the user exists
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.send('error2');
  }

  res.send('login');
});

app.post('/register', (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  // Read users from JSON file
  const data = fs.readFileSync('users.json');
  const users = JSON.parse(data);

  // Check if the username or password already exist
  const userExists = users.find(user => user.username === username || user.password === password);
  if (userExists) {
    return res.send('error1');
  }

  // Add the new user to the array
  users.push({ name, lastName, email, username, password });

  // Write users to JSON file
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

  res.send('register');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
