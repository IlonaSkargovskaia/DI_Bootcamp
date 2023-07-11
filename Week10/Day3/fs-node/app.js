// const fs = require('fs');



/*
    With promises
*/

// const fs = require('fs').promises;

// const read = async() => {
//     try {
//         const data = await fs.readFile('info.json', 'utf-8');
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// read()


/*
    Update info inside file info.json
*/

fs.readFile('info.json', 'utf-8', (err, data) => {
    if (err) return console.log(err);

    const product = JSON.parse(data);
    const index = product.findIndex(item => item.id == 3);

    product[index] = {
        ...product[index],
        price: 760
    }

//     fs.writeFile('info.json', JSON.stringify(product), 'utf-8', (err) => {
//        if(err) return console.log(err);
//     })
//     console.log(data);
// })



/*
    delete a file 
*/

// fs.unlink('text.txt', err => {
//     if(err) return console.log(err);

// })


/*
    append to file 
*/
// const product = {
//     name:"iPhone",
//     price: 500
// }

// fs.appendFile('info.json', JSON.stringify(product), 'utf-8', err => {
//     if(err) return console.log(err);
// })


/*
    create file text.txt
*/

// fs.writeFile('text.txt', '12345', 'utf-8', (err) => {
//     if(err) return console.log(err);
// })


//override file json, what have another obbject before
// const product = {
//     name:"iPad",
//     price: 1000
// }

// fs.writeFile('info.json', JSON.stringify(product), 'utf-8', (err) => {
//     if(err) return console.log(err);
// });


/*
    async read file
*/

// console.log(('before'));
// fs.readFile('info.json', 'utf-8', (err, data) => {
//     if (err) return console.log(err);

//     console.log(data);
// })

/*
    reading from a file info.json sync
*/

// try{
//     const data = fs.readFileSync('info.json', 'utf-8');
//     console.log(JSON.parse(data));
// } catch(err) {
//     console.log(err);
// }

// console.log('after');