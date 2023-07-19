const express = require('express');
const app = express();

//use ejs
app.set('view engine', 'ejs');

//static
app.use(express.static('public'));


let menu = [
    {
        name: "Margarita",
        price: 10,
        ingredients: ["Tomato Sauce", "Mozzarella", "Basil"]
    },
    {
        name: "Bianca",
        price: 13,
        ingredients: ["Ricotta", "Mozzarella", "Garlic"]
    },
    {
        name: "Etna",
        price: 14,
        ingredients: ["Tomato sauce", "Mozzarella", "Anchovies", "Capers", "Olives"]
    }
]

//index page
app.get('/', (req, res) => {
    //res.render('home');
    res.render('index', {nameRestaurant: 'Papa Pizza', pizzaMenu : menu});
});

//second page ejs
app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000);