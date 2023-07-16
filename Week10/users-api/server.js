import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { log } from 'console';


const app = express();
app.use(cors());

//= body_parser
app.use(express.urlencoded({extended: true}));
app.use(express.json())
//for .env
dotenv.config();





app.listen(process.env.PORT || 3001, () => {
    console.log(`listen on ${process.env.PORT || 3001}`);
})


// //check connection to db
// import {db} from './config/db.js';


// db('products')
// .select('*')
// .then(rows => {
//     console.log(rows);
// })