function printFullName({first, last}){
    return `Your full name is ${first} ${last}`;
}

console.log(printFullName({first: 'Elie', last:'Schoppik'})) ;


//Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(obj) {
    return Object.entries(obj);
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));


//output will be 3

class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment();
  counterOne.increment();
  
  const counterTwo = counterOne;
  counterTwo.increment();
  
  console.log(counterOne.count);