// 1. Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23


function displayNumbersDivisible(divisor){
    let sum = 0;
    let outer = '';
    
    for (let i = 0; i < 501; i++){
        if (i % divisor === 0) {
            outer += i + ' ';
            sum += i;
        }
    }

    console.log('Outer: ', outer.trim());
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


// 3 Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

function changeEnough(itemPrice, amountOfChange){

    quarters = amountOfChange[0] * 0.25;
    dimes = amountOfChange[1] * 0.10;
    nickels = amountOfChange[2] * 0.05;
    pennies = amountOfChange[3] * 0.01;
    totalChange = quarters + dimes + nickels + pennies;

    console.log(totalChange);

    if (totalChange >= itemPrice){
        console.log(true);
    } else {
        console.log(false);
    }
    
}

changeEnough(4.25, [25, 20, 5, 0]);


// Vacations Costs

function hotelCost(){
    
    let totalPrice = 0;
    let userAnswer = +(prompt("Write a number of days what you would like to stay in hotel?"));

    while (isNaN(userAnswer)) {
        userAnswer = prompt('Wrong answer, try again: ');
    } 
    
    if (!isNaN(userAnswer)) {
        totalPrice = userAnswer * 140;
    }

    return totalPrice;
}




function planeRideCost() {
    let destination = prompt('Where you would like to go?');
    let prices = {
        'London' : 183,
        'Paris' : 220,
        'others' : 300,
    }

    while ((destination === null) || (destination === '') || (typeof destination !== 'string')) {
        destination = prompt('Wrong answer, try again: ');
    }
    
    if (destination === 'London') {
        return prices['London'];
    } else if (destination === 'Paris') {
        return prices['Paris'];
    } else {
        return prices['others'];
    }
}




function rentalCarCost(){
    let totalPriceCar = 0;
    let userAnswerDaysCar = +(prompt("Write a number of days what you would like to rent a car?"));

    while (isNaN(userAnswerDaysCar)) {
        userAnswerDaysCar = prompt('Wrong answer, try again: ');
    } 
    
    if (!isNaN(userAnswerDaysCar) && (userAnswerDaysCar > 10)) {
        totalPriceCar = userAnswerDaysCar * 40 * 0.05;
    } else {
        totalPriceCar = userAnswerDaysCar * 40;  
    }
    return totalPriceCar;
}


function totalVacationCost(){
    const carCost = rentalCarCost();
    const hotCost = hotelCost();
    const planeRide = planeRideCost();

    console.log(`The car cost: ${carCost}, the hotel cost: ${hotCost}, the plane tickets cost: ${planeRide}`);
}

// totalVacationCost();



// 5 users

// Using Javascript:
// Retrieve the div and console.log it
const container = document.getElementById("container");
// Change the name “Pete” to “Richard”.
const list = container.nextElementSibling;
let listName = list.lastElementChild;
listName.textContent = 'Richard';
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
const secList = document.body.children[3];
let secListLi = secList.children[1].remove();
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)
const twoLists = document.querySelectorAll('.list');
for (let item of twoLists) {
    let firstLi = item.children[0];
    firstLi.textContent = 'Ilona';
}


