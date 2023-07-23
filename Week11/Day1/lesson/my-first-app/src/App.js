import "./App.css";
import { useState } from "react";

const handleInput = (e) => {
  //we haven't getelementbyId
  const value = e.target.value;
  console.log(value);
};



//const App = () => {}
function App() {
  //state = variable, setState - function what will change this variable
  //const [state, setState] = useState();
  //let name = 'john';
  const [name, setName] = useState("john");
  const [users, setUsers] = useState([]) //by default users = undefinded

  console.log(users);
  //console.log("name=>", name);

  const handleClick = async (name) => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        //async
        setUsers(data)
      } catch (error) {
        console.log(error);
      }
    // name = 'Marry';
    // console.log(name);

    //for show on page
    // setName("Alla");
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={(e) => handleInput(e)} />
        {/* like addeventlistener */}
        <button onClick={() => handleClick()}>Click!</button>

        <h1>{name}</h1>

        { //set empty array at the beggining in useState
             users.map(item => {
                return (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                    </div>
                )
            })
        }
      </header>
    </div>
  );
}

export default App;
