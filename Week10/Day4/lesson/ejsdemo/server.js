const express = require('express');
const ejs = require('ejs');

const app = express();

// set template engine
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on ${process.env.PORT || 3001}`)
});

app.get('/', (req, res) => {
    let user = {
        firstName: 'John',
        lastName: 'Due'
    };
    let login = true;


    let students = {
        stu1 : 'Mary',
        stu2 : 'kelly',
        stu3 : 'lura'
    }

    let arr = [
        {id: 1, "name" : 'iPhone', price: 800},
        {id: 2, "name" : 'iPhone', price: 1200},
        {id: 3, "name" : 'iPhone', price: 1500},
    ]

    res.render('index', {
        user,
        login,
        students,
        arr
    })
})


app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})