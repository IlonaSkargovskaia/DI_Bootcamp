import express from 'express';
import path from 'path';
import {promises as fsPromises} from "fs" ;
const app = express();
const __dirname = path.resolve(); //create dirname

//needed for put and post methods
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// we need this line to make the files in public folder available
app.use(express.static(__dirname + "/public"));

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/public/register.html")
})

app.post("/register", async (req, res) => {
    console.log("in register");
    const dataBody = req.body;
    const readFileResponse = await readuser(dataBody);
    res.json(readFileResponse);
})


async function readuser (currentUser) {
    console.log("in readuser");
    
    const data = await fsPromises.readFile(__dirname + "/public/data.json")
    .catch((err) => console.error('Failed to read file', err));
    
    const datausers = JSON.parse(data); //array of objects

    console.log("datausers", datausers);
    
    const findUser = datausers.findIndex((element) => 
            element.username === currentUser.username)

    console.log("findUser", findUser);

    if (findUser >= 0) {
        console.log("User already exists");
        return "User already exists";
    } else {
        datausers.push(currentUser);
        console.log("User added successfully", datausers);
        //VERY IMPORTANT TO STRINGIFY THE DATA SENT TO WRITE FILES
        await fsPromises.writeFile(__dirname + "/public/data.json", JSON.stringify(datausers));
        return "User added successfully";
    }
}

app.listen("3000", () => {
    console.log("SERVER LISTENING");
})
