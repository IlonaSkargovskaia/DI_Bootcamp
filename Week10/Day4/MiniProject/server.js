import express from 'express';
import dotenv from "dotenv";
import path from 'path' //for public

const app = express();
dotenv.config();

//for public
const __dirname = path.resolve()
app.use('/', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.listen(process.env.PORT, () => {
    console.log(`we run on ${process.env.PORT}`)
})