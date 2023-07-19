import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    try {
        const allUsers = await db.select('*').from('register');
        res.json(allUsers);
    } catch (error) {
        console.log(error);
    }
    
})

app.post('/register', async (req, res) => {
    //console.log(req.body);
    const {firstname, lastname, email, username, password} = req.body;

    try {
        const existInDb = await db('register').where('username',username).first();
        console.log(existInDb); // obj from db

        if (!existInDb) {
            try {
                const newUser = await db('register').insert(req.body).returning('*');
                res.status(200).json(newUser);
            } catch (error) {
                console.log(error);
                res.status(500).json('Error with server')
            }
            
        } else {
            res.status(400).json('User already exist')
        }

    } catch (error) {
        console.log(error);
    }


})

app.post('/login', async (req, res) => {
    console.log(req.body); //{username: 'ilona', password: '123'}
    const {username, password} = req.body;

    try {
        const userInBD = await db('register').where({username: username, password: password}).first();
        
        if (userInBD) {
            console.log('User found in DB');
            res.status(200).json(userInBD);
        } else {
            res.status(404).json({error: 'User not found, try again'})
        }
        
    } catch (e) {
        console.log(e);
        res.status(500).json({error: 'Internal server error'})
    }
    
})


app.listen(process.env.PORT, () => {
    console.log(`listening ${process.env.PORT}`);
})