import express from 'express';
import dotenv from "dotenv";
const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));




app.listen(3000)