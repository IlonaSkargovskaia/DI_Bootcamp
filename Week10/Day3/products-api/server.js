//const express = require('express');
import express from "express";
import dotenv from 'dotenv'; //for env file
import prouter from './routes/products.js'

const app = express()
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
})

app.use('/api/products',prouter)