const express = require('express');
const app = express();
//const bodyParser = require("body-parser");

app.use('/', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.get('/aboutMe/:hobby', (req, res) => {
    if (typeof req.params !== 'string'){
        res.status(404).json({ msg : 'Hobby not valid'})
    } else {
        res.json(req.params.hobby);
    }
})

app.get('/pic', (req, res) => {
    res.sendFile(__dirname + '/public/picture.html')
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/form.html')
})

app.post('/formData', (req, res) => {
    console.log(req.body);
    res.end(`${req.body.email} sent you a message ${req.body.message}`);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})