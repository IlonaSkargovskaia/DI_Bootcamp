const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('test server')
})

app.post('/save-weather', (req, res) => {
    const weatherData = req.body;

    fs.writeFile('weather_data.json', JSON.stringify(weatherData), (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({error: 'Error writing file'})
        } else {
            console.log('Weather data saved successfully');
            res.json({msg: 'Weather data saved successfully!'})
        }
    })
});

app.listen(PORT || 3005, () => {
    console.log(`Server is listening ${PORT}`);
});