import "./App.css";
import {useState} from 'react';

function App() {

    const [forminputs, setFormsinputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        const checkbox = e.target.typ
        setFormsinputs({ ...forminputs, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(forminputs);
        // generate a URL query
        // const query = new URLSearchParams(formData).toString();
        // console.log("query=>", query);
    
        
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
                <select onChange={(e) => handleChange(e)}>
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
        </div>
  );
}

export default App;
