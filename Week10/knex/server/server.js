import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);



app.get('/', (req, res) => {
    res.json('text');
});


app.get('/getallusers', async (req, res) => {
    try {
        const users = await db.select('*').from('users');
        res.json(users);
    } catch (e) {
        console.log(e);
        res.status(500).json({error: 'internal server error'})
    }
   
});

//insert to db
app.post('/register', async (req, res) => {
    // const {username, password} = req.body;
    // console.log(req.body); //{ username: 'test', password: '123' }

    // try {
    //     //.where('name_column', username from req.body)
    //     const existsInDb = await db('users').where('username', username).first();
    //     console.log(existsInDb); // object from DB{ id: 1, username: 'test', password: 'test' }

        
    //     if(!existsInDb) {
    //         try {
    //             //returning what we inserted now
    //             const newUser = await db('users').insert(req.body).returning('*');
    //             //if not in DB
    //             res.status(200).json({message: 'Registered successfully'})
    //         } catch (error) {
    //             console.log(error);
    //             //for client
    //             res.status(500).json({error: 'Internal server error'});
    //         }
           
    //     } else {
    //         res.status(400).json({error: 'Username exists'})
    //     }
    // } catch (error) {
    //     console.log(error);
    //     //for client
    //     res.status(500).json({error: 'Internal server error'});
    // }
})

//login
app.post("/login", async (req, res) => {
    // const { username, password } = req.body;
    // try {           
    //     const existsInDb = await db('users').where('username', username).first(); // object from DB
        
    //     //if username - exist
    //     if (existsInDb) {
    //         //if password also exist
    //         if(existsInDb.password === req.body.password) {
    //             res.status(200).json({message: `Login successfully, Welcome ${username}`})
    //         //if password not in database
    //         } else {
    //             res.status(400).json({error: `Password incorrect, try again`})
    //         }
    //     } else {
    //         res.status(400).json({error: `Username doesn't exist`})
    //     }

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({error: `Internal server error`})
    // }
    
    //res.json("very very success")
});


app.listen(process.env.PORT, () => {
    console.log(`listening ${process.env.PORT}`);
});