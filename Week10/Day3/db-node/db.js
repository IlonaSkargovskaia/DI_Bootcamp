const knex = require('knex');

const db = require('knex')({
    client: 'pg',
    connection: {
      host: 'john.db.elephantsql.com',
      port: '5432',
      user: 'hlhamwmx',
      database: 'hlhamwmx',
      password: 'pRvmFql0_d-6znOSSLiIpbyxVnEDzKnG'
    }
});


//queries from database

db.select('id', 'name', 'price')
.from('products')
.then(rows => {
    console.log(rows);
})


// db('products')
// //delete
// .where({name: 'p111'})
// .del()
// .returning("*") //always returning array
// .then((rows) => {
//     console.log(rows);
// })
// .catch((err) => {
//     console.log(err);
// })


// db('products')
// //update
// .update({name: 'p111'})
// .where({id: 8})
// .returning("*")
// .then((rows) => {
//     console.log(rows);
// })
// .catch((err) => {
//     console.log(err);
// })


// db('products')
// //insert new objects
// .insert(
//     [
//         {name: 'p1', price: 11000},
//         {name: 'p2', price: 11000},
//     ])
// .returning('*') //увидеть сразу что именно добавляем
// .then((rows) => {
//     console.log(rows);
// })
// .catch((err) => {
//     console.log(err);
// })

//another method
// db.raw('select id, name, price from products')
// .then(rows => {
//     console.log(rows.rows); // promise and data inside rows
// })