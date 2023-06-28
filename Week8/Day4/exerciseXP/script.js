const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//it will be a string with values from the destructuriesed object
//I am John Doe from Vancouver, Canada. Latitude(...), Longitude(...)



// Using the code above, destructure the parameter inside the function and return a string as the example seen below:

function displayStudentInfo(objUser){
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


//3
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]



const users = { user1: 18273, user2: 92833, user3: 90315 }

const arraysOfUsers = Object.entries(users);
 // [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

arraysOfUsers.forEach(element => console.log(element[1] * 2));
console.log(arraysOfUsers);


//4
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
const member = new Person('John');
console.log(typeof member);

//will be object


//5
class Dog {
    constructor(name) {
      this.name = name;
    }
};

class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
};
//because this subclass has super() with parents parameters + right count of parameters in his own constructor

//6
console.log([2] === [2]) // false
console.log({} === {}) //false

//because it is dynamical datatypes and even they have the same values - its different objects and arrays which have different references


const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5}; 

object1.number = 4; 
console.log(object2.number) //4 - reference to object 1
console.log(object3.number) // 4 - reference to object 1
console.log(object4.number) // 5 - other object


class Animal {
    constructor (name, type, color){
        this.nameAnimal = name;
        this.typeAnimal = type;
        this.colorAnimal = color;
    }

}

class Mammal extends Animal {
    constructor (name, type, color, sound){
        super(name, type, color);
        this.soundAnimal = sound;
    }

    sound() {
        console.log(`${this.soundAnimal} I'm a ${this.typeAnimal} named ${this.nameAnimal} and I'm ${this.colorAnimal[0]} and ${this.colorAnimal[1]}`);
    }

}

const farmerCow = new Mammal('Lily', 'cow', ['brown', 'white'], 'Mooo');
farmerCow.sound();