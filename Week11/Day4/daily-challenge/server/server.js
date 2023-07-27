import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());


app.get('/api/hello', (req, res) => {
    res.json('Hello from express');
})


app.listen(3001, () => {
    console.log(`listening 3001`);
})
