const express = require('express');
const app = express();

app.get('/:id', (req, res) => {
    console.log(req.params);
    res.json(req.params);

})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})