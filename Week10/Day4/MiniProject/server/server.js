import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';
import bcrypt from 'bcrypt'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    try {
        const allUsers = await db.select('*').from('users');
        res.json(allUsers);
    } catch (error) {
        console.log(error);
    }
    
})

app.post('/register',async (req, res) => {
    console.log(req.body);
    const {firstname, lastname, email, username, password} = req.body;

    try {

        const userExist = await db('users').where({username: username, password: password}).first();

        if (userExist) {
            console.log(userExist);
            res.status(400).json('User already exist')
        }  
    
        // Hash and salt the password before inserting into the database
        const hashedPassword = await bcrypt.hash(password, 10);
    
        //destructur user array
        const [newUser] = await db('users').insert({
            first_name: firstname,
            last_name: lastname,
            email: email,
            username: username,
            created_date: new Date(), // Use the current date as the registration date
            last_login: null, // last_login to null since the user not logged in yet
        }).returning('*');
    
        // Insert login data into the 'logins' table
        await db('login').insert({
            login_id: newUser, //newly generated user_id from the 'users' table
            username: username,
            password: hashedPassword, 
            login_date: null, //null since the user not logged in yet
        });
    
        
        res.json('User registered successfully!');
        
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error');
    }
   
})


app.listen(process.env.PORT, () => {
    console.log(`listening ${process.env.PORT}`);
})