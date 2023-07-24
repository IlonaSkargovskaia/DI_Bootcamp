import { useState } from 'react';
import './Book.css'

const Book = () => {

    //data from all inputs
    const [inputs, setInputs] = useState({});
    const [msg, setMsg] = useState('');


    const getInputsData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(inputs => ({...inputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        const message = <p>Data sent!</p>;
        setMsg(message);
    }

    return (
        <div className="formBook">
            <h1>New Book</h1>
            {msg}
            <form onSubmit={handleSubmit}>
                Title: <input type="text" name="title" value={inputs.title || ""}  onChange={getInputsData} /> <br />
                Author: <input type="text" name="author" value={inputs.author || ""} onChange={getInputsData} /> <br />
                Genre: <input type="text" name="genre" value={inputs.genre || ""} onChange={getInputsData} /> <br />
                Year Published: <input type="text" name="year" value={inputs.year || ""} onChange={getInputsData} />  <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Book;