import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());


app.get('/api/hello', (req, res) => {
    res.json('Hello from express');
})

app.post('/api/world', (req, res) => {

    const {post} = req.body;
    console.log(req.body);
    res.json(`I received your POST request. This is what you sent me: ${post}`);
})


app.listen(3005, () => {
    console.log(`listening 3005`);
})
