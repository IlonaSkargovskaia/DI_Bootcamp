import express from 'express';
import bodyparser from 'body-parser';
import path from 'path';
const __dirname = path.resolve();
const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));


app.post('/form', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.listen(3001, () => console.log('on port 3001'));