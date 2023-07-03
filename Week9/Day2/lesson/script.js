// const string = function(str) {

//     const firstPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof str === 'string') {
//                 resolve(str.toUpperCase());
//             } else {
//                 reject(`error ${str}`); 
//             }
//         }, 5000)  
//     })

//     return firstPromise;
// }

// string('Hello world')
// .then((result) => {
//    console.log(result + result)
// })
// .catch((error) => {
//     console.log(error);
// })

// string(10293)
// .then((result) => {
//    console.log(result + result)
// })
// .catch((error) => {
//     console.log(error);
// })

let a = 10;

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a = 99)
    }, 5000)
})

newPromise
.then((message) => {
    console.log('a now = ', a);
})
