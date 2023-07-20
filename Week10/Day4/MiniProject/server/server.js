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

        const userExist = await db('users').where({username: username}).first();

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
            created_date: new Date(), 
            last_login: null, 
        })
        .returning('*');
    
       
        await db('login').insert({
            username: username,
            password: hashedPassword, 
            login_date: new Date(),
        });
    
        res.status(200).json('User registered successfully');
        
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error');
    }
   
});


app.post('/login', async (req, res) => {
    console.log(req.body); //{ userNameLogin: 'ilona', userNamePass: '123 => convert in register' }

    const {userNameLogin, userNamePass} = req.body;

    const userExist = await db('login').select('password').where({username: userNameLogin});
    console.log('User exist?', userExist);

        if (userExist.length == 0) {
            console.log('User doesnt exist in DB');
            res.status(404).json({err: `Username or password not found, try again`});
        }  else {
            const match = bcrypt.compareSync(userNamePass, userExist[0].password);

            if (match) {
                await db('users').update({last_login: new Date()});
                res.status(200).json(`Welcome, your username is ${userNameLogin}`);
            } else {
                res.status(400).json('Wrong password');
            }
            
        }

});


app.listen(process.env.PORT, () => {
    console.log(`listening ${process.env.PORT}`);
})