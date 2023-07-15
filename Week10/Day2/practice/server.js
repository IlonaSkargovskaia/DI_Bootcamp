// const http = require('http');

// const json =
// {
//     "menu": {
//         "id": "file",
//         "value": "File",
//         "popup": {
//             "menuitem": [
//                 { "value": "New", "onclick": "CreateNewDoc()" },
//                 { "value": "Open", "onclick": "OpenDoc()" },
//                 { "value": "Close", "onclick": "CloseDoc()" }
//             ]
//         }
//     }
// }

// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.end(JSON.stringify(json));
    
// })

// server.listen(3000, () => {
//     console.log('I am listening 3000');
// })


// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hi guys'); //send text to html page
// })

// app.listen(3001, () => {
//     console.log('I am listening 3001')
// })


//middleware

// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//     console.log("Hello Middleware");
//     next();
// });

// app.get('/home', (req, res) => {
//     console.log("-----In the Home Page-----");
//     res.send('Home Page');
// });

// app.get('/about', (req, res) => {
//     console.log("-----In the About Page-----");
//     res.send('About Page');
// });

// app.listen(3000, () => console.log('Example app listening on port 3000!'));


//params

// const express = require('express');
// const app = express();

// app.get('/tutorial/:notion', (req, res) => {
//     console.log("req.params: ", req.params)
//     res.send(`Tutorial about ${req.params.notion}!`) // notion = after second / in URL
// })

// app.listen(3000, () => console.log('Example app listening on port 3000!'));


//queries

// const express = require('express')
// const app = express()

// // http://localhost:3000/tutorial?notion=books

// app.get('/tutorial', (req, res) => {
//     console.log(req.query); // { notion: 'books' }
//     res.send(`Tutorial about express`)
// })

// app.listen(3000)


//respond JSON
// const express = require('express')
// const app = express()

// const course = {
//     name: "JS april",
//     finish: "august"
// }

// app.get('/tutorial', (req, res) => {
//     res.json(course);
// })

// app.listen(3000);


//bodyParser
// const express = require('express');
// const app = express();
// //require the module
// const bodyParser = require("body-parser")

// app.use(express.static('public'));
// //use the module
// app.use(bodyParser.urlencoded({ extended: true }));


// app.post('/search', (req, res) => {
//     console.log(req.body)
//     res.send(`welcome,  ${req.body.fullname} and your address ${req.body.address}`) //fullname + address from attribute "name" in html-form
// })

// app.listen(3000, () => console.log('Example app listening on port 3000!'));



//knex

const express = require('express');
const app = express();

const db = require('knex') ({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'root',
        database: 'Hollywood',
        posrt:5432
    }
});

app.set('db', db);

//from table actors get firstName and lastName columns

// app.get('/', (req, res) => {
//     db
//     .select('first_name', 'last_name')
//     .from('actor')
//     .then(actors => {
//         res.send(actors);
//         //Got on html page from DataBase [
//         //     {"first_name":"Megan","last_name":"Fox"},
//         //     {"first_name":"Cameron","last_name":"Diaz"},
//         //     {"first_name":"Jenifer","last_name":"Aniston"},
//         //     {"first_name":"Sandra","last_name":"Bullock"},
//         //     {"first_name":"Brad","last_name":"Pitt"},
//         //     {"first_name":"Maty","last_name":"Damon"},
//         //     {"first_name":"Georges","last_name":"Cloney"},
//         //     {"first_name":"Jackie","last_name":"Chan"}
//         //     ]
//     })
// });


//with conditions for ex: select * from actors where first_name = 'Megan' and last_name = 'Fox';

// app.get('/', (req, res) => {
//     db
//     .from('actor')
//     .where({first_name: 'Megan', last_name: "Fox"})
//     .then(actors => {
//         res.send(actors)
//         // [{"actor_id":11,"first_name":"Megan","last_name":"Fox","birthdate":"1986-05-06T22:00:00.000Z","number_oscars":5,"salary":5000000,"nationallity":"American"}]
//     }) 
// })


//with compare: select * from actors where number_oscars >= 2

// app.get('/', (req, res) => {
//     db
//     .from('actor')
//     .where('number_oscars', '>=', 2)
//     .then(actors => {
//         res.send(actors)
//         // [{"actor_id":11,"first_name":"Megan","last_name":"Fox","birthdate":"1986-05-06T22:00:00.000Z","number_oscars":5,"salary":5000000,"nationallity":"American"}]
//     }) 
// })


// app.get('/', (req, res) => {
//     db('actor')
//     .where('actor_id', 1)
//     .orWhere({ first_name: "Megan" })
//     .then(actors =>
//         res.send(actors)
//     )
// })



//INSERT

// app.get('/', (req, res) => {
//     db('actor')
//     .returning(['actor_id', 'first_name', 'last_name'])
//     .insert({first_name: 'Gal', last_name: 'Gadot', birthdate: '1985-04-30', number_oscars: 0 })
//     .then(actors => 
//         res.send(actors))
// })



//UPDATE
// app.get('/', (req, res) => {
//     db('actor')
//     .where('first_name', 'Brad')
//     .andWhere('last_name', 'Pitt')
//     .update({
//         number_oscars: 4
//     })
//     .returning(['*'])
//     .then(actors => {
//         res.send(actors);
//     })
// })


//DELETE

// app.get('/', (req, res) => {
//     db('actor')
//         .where('first_name', 'Gal')
//         .andWhere('last_name', 'Gadot')
//         .del(['actor_id', 'first_name', 'last_name'])
//         .then(actors =>
//             res.send(actors)
//         )
// })

app.listen(3000)



