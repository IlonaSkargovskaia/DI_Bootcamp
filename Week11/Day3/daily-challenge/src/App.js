import "./App.css";
import Output from "./components/Output";
import {useState} from 'react';

function App() {

    const [forminputs, setFormsinputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        let value;

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        } else {
            value = e.target.value;
        }

        
        setFormsinputs({ ...forminputs, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // generate a URL query
        const query = new URLSearchParams(forminputs).toString();
        console.log("query=>", query);

        // Redirect to the generated URL
        window.location.href = `http://localhost:3000/?${query}`;
        
      };

    return (
        <div>
        <header>
            <h1>Sample form</h1>
        </header>
            <main>
                <form className="topForm" onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="firstname" placeholder="First Name" onChange={(e) => handleChange(e)}/> <br />
                    <input type="text" name="lastname" placeholder="Last Name" onChange={(e) => handleChange(e)}/> <br />
                    <input type="text" name="age" placeholder="Age" onChange={(e) => handleChange(e)}/> <br />
                    <br />
                    <div>
                        <input type="radio" value="Male" name="gender" onChange={(e) => handleChange(e)}/> Male <br />
                        <input type="radio" value="Female" name="gender" onChange={(e) => handleChange(e)}/> Female
                    </div>
                    <br />
                    <p>Select your destination</p>
                    <select name='destination' onChange={(e) => handleChange(e)}>
                        <option value="choose"> -- Please Choose a destination -- </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Japan">Japan</option>
                        <option value="Brazil">Brazil</option>
                    </select>
                    <br />
                    <p>Dietary restrictions: </p>

                        <input type="checkbox" name="nuts" onChange={(e) => handleChange(e)} /> Nuts free 
                        <input type="checkbox" name="lactose" onChange={(e) => handleChange(e)} /> Lactose free 
                        <input type="checkbox" name="vegan" onChange={(e) => handleChange(e)} /> Vegan 
                    
                    <br />
                    <button>Submit</button>
                </form>
                
            </main>
            <Output forminputs={forminputs}/>
        </div>
  );
}

export default App;
