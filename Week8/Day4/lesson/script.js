// const facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// const {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); //8
// console.log(yearNeptuneDiscovered); // 1846


// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
// };
  
  
// let {numPlanets, ...discoveryYears} = planetFacts;
  
// console.log(discoveryYears); // ?{ yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}



// function getDetails(obj) {
//     const {name, house, goodstudent} = obj;
// 	console.log(name, house, goodstudent)
// }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})


// //4

// function getMoreDetails(obj) {
//     const {name, house, friend : {friendName, age}} = obj;
// 	console.log(name, house, friendName, age)
// }

// getMoreDetails(
// 			{name: 'Hermione Granger', 
// 			house: 'Gryfindor', 
// 			friend :  {
// 					friendName : 'Harry Potter', age : 20
// 				}
// 			})


// //5

// const elonPerson = {
//     first: 'Elon',
//     last: 'Musk',
//     housesLocation : ["new york", "paris"],
//     twitter: '@elonmusk',
//     company: 'Space X',
//     houses : {
//       amount: 2,
//       value : "5Million"
//     }
// }

// function getElonMuskDetails(obj){

//     const {first: firstname, last: lastname} = obj;
// 	console.log(firstname, lastname)
//     const {housesLocation: [locationOne, locationTwo], houses: {value : valueHouses}} = obj;
// 	console.log(locationOne, locationTwo, valueHouses)

// }

// getElonMuskDetails(elonPerson)


// //6
// const employees = [
// 	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
// 	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
// ]

// employees.forEach(element => {
//     const {name, email, phone} = element;
//     console.log(name, email, phone);
// })


class Wizard {
    constructor (name, power, life=100) {
        this.wizardName = name;
        this.power = power;
        this.life = life
    }

    fight (otherwizard) {
        this.life -= 10;
        otherwizard.life -= 100
    }

    showWizard () {
        const sentence = `The wizard ${this.wizardName} has ${this.life} life point`
        console.log(sentence);
    }
}

const wizard1 = new Wizard("John", "fly", 200);
// wizard1.showWizard()
// wizard1.fight()
// wizard1.showWizard()
const wizard2 = new Wizard("Emma", "read mind", 300);
wizard2.showWizard()
wizard1.showWizard()
wizard2.fight(wizard1)
wizard2.showWizard()
wizard1.showWizard()

class DeveloperWizard extends Wizard {
    constructor (name, power,programminglanguage, life) {
        super(name, power, life)
        this.language = programminglanguage;
    }

    showWizard () {
        const sentence = `The wizard ${this.wizardName} has ${this.life} life point and code in ${this.language}`
        console.log(sentence);
    }
}

const wizard3 = new DeveloperWizard("Tom", "code","Javascript")
console.log(wizard3);
wizard3.showWizard()



class TV {
    constructor (brand, channel, volume = 50) {
        this.brandTV = brand;
        this.channelTV = channel;
        this.volumeTV = volume;
    }

    volumeUp() {
        this.volumeTV++;
    }

    volumeDown() {
        this.volumeTV--;
    }
}

const LG_TV = new TV('LG', 'TNT', 20);
console.log(LG_TV);
LG_TV.volumeUp();
console.log(LG_TV);
LG_TV.volumeDown();
console.log(LG_TV);


class SmartTV extends TV {
    constructor(brand, channel, volume, netflix = true) {
        super(brand, channel, volume);
        this.netflix = netflix;
    }

    volumeUp() {
        this.volumeTV += 10;
    }
}

const LG_TV_SMART = new SmartTV('LG', 'TNT', 30);
console.log(LG_TV_SMART);
LG_TV_SMART.volumeUp();
console.log(LG_TV_SMART);