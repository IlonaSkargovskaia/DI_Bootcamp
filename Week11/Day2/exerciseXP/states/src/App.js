import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color'

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Car info={carinfo} />
          <Events />
          <Phone />
          <Color />
      </header>
    </div>
  );
}

export default App;
