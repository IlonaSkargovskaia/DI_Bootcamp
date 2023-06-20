// 1. Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23


function displayNumbersDivisible(divisor){
    let sum = 0;
    for (let i = 0; i < 501; i++){
        if (i % divisor == 0) {
            console.log(i);
            sum += i;
        }
    }

    console.log("Sum: ", sum);
}

displayNumbersDivisible(33);


// Exercise 2 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

shoppingList = ['banana', 'orange', 'apple'];

function myBill(){
    let total = 0;

    shoppingList.forEach(element => {
        if (element in stock && stock[element] > 0){
            total += stock[element];
            prices[element]--;
        }
    });
    console.log('Total sum:', total);
    return total;
}

myBill();
console.log(prices);



