function compareToTen(num){
    const checkNum = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num <= 10){
                resolve(num);
            } else {
                reject(`${num} > 10, try again`)
            }
        }, 2000)
    });

    return checkNum;
}
//go to catch
compareToTen(15)
.then((result) => {
    return console.log(result);
})
.catch(error => {
    return console.log(error)
})
//go to then
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))



//2
// Create a promise that resolves itself in 4 seconds and returns a “success” string.


const checkSelf = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Success`);
    }, 4000);

});

checkSelf
.then((result) => console.log(result));



//3
// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.resolve(3).then((result) => console.log(result));
Promise.reject('Boo').catch((result) => console.log(result));
