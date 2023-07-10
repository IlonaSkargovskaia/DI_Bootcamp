// //creating first webserver
// const http = require('http');

// const server = http.createServer((request, response) => {
//     console.log('Get the request from client');
//     response.end('Hello from server');
// })

// server.listen(3001, () => {
//     console.log('run on 3001');
// });


const express = require('express');
const {products} = require('./config/data.js');

const app = express();

//чтобы получить данные в body
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

//for using static html, css antc in public folder
//dirname - path where my server 
app.use('/', express.static(__dirname + '/public'));

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
});

//запуск сервера
app.listen(3001, () => {
    console.log(`server is listening on port 3001`);
})

//получаем данные из products

app.get('/api/products', (req, res) => {
    res.json(products);
})

//GET - get one product
//product will be key and when I put it into url with sefrbgsejh - it will be value
//http://localhost:3001/api/products/123 - { product: '123' }
app.get('/api/products/:product', (req, res) => {
    console.log(req.params);
    const product_id = req.params.product;

    const product = products.find(item => item.id == product_id);
    if(!product) {
        return res.status(404).json({ msg : 'Product not found'})
    }
    res.json(product);
})



//Read = search product with query ?name=ip
app.get("/api/search", (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const filtered = products.filter((item) => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    })
    if(filtered.length === 0) {
      return res.status(404).json({msg:'No product matched your search!!!'})
    }
    res.json(filtered);
});


//Create

app.post('/api/products', (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.json(products);
})

//Update 

app.put('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const index = products.findIndex(item => item.id == id);
    if(index === -1) {
        return res.status(404).json({msg:'No product !!!'})
    }
    //object by index
    products[index] = {...products[index], name : req.body.name, price: req.body.price};
    res.json(products);
})

//Delete
app.delete('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const index = products.findIndex(item => item.id == id);
    if(index === -1) {
        return res.status(404).json({msg:'No product !!!'})
    }

    products.splice(index, 1);
    res.json(products);
})

