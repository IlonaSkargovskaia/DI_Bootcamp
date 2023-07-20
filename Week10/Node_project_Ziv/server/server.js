import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import u_router from './routes/usersrouter.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//test db
// db('users')
// .select('*')
// .then((rows) => {console.log(rows);})

app.get('/', (req, res) => {
    res.json('text');
})


app.listen(process.env.PORT, () => {
    console.log(`listening ${process.env.PORT}`);
})

app.use('/users', u_router);