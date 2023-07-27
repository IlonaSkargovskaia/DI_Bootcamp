import Car from './components/Car';
import SearchCar from './components/SearchCar';
import './App.css';



function App() {

  const carColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown"
  ]

  //array of objects passed to the SearchCar component
  const listCars = [
    {
      id: 1,
      brand: "ford",
      name: "ford torino",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id: 2,
      brand: "ford",
      name: "ford galaxie 500",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id: 3,
      brand: "chevrolet",
      name: "chevrolet vega 2300",
      year: "1971-01-01",
      origin: "USA"
    },
    {
      id: 4,
      brand: "peugeot",
      name: "peugeot 504 (sw)",
      year: "1972-01-01",
      origin: "Europe"
    },
    {
      id: 5,
      brand: "renault",
      name: "renault 12 (sw)",
      year: "1972-01-01",
      origin: "Europe"
    },
  ]

  let nameCar;

  const handleChange = (e) => {
      nameCar = e.target.value
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <Car colors = {carColors}/> */}
        <SearchCar list = {listCars} handleChange = {handleChange}/>
      </header>
    </div>
  );
}

export default App;
