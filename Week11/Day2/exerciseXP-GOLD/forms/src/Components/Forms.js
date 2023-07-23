import { useState, useEffect } from 'react';

const Forms = () => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState(null);
    const [errormessage, setError] = useState('');
    //textarea
    const [value, setValue] = useState('');
    //select
    const [opt, setOpt] = useState('volvo');

    let header = '';

    const changeName = (e) => {
        const newName = e.target.value;
        setUsername(newName);
    }

    if (username !== '') {
        header = <h1>Hello {username} {age}</h1>;
    }

    const mySubmitHandler = () => {
        alert(`You are submitting ${username}`);
    }

    const changeAge = (e) => {
        const newAge = e.target.value;
        const error = <p><b>Your age must be a number</b></p>;
        if (!isNaN(newAge)) {
            setAge(newAge);
        } else {
            setError(error);
        }
        
    }


    const changeSelect = (e) => {
        const opt = e.target.value;
        setOpt(opt);
    }



    return (
        <div style={{textAlign: 'center'}}>

            {header}

            <form onSubmit={mySubmitHandler}>
                <p>Enter your name:</p>
                <input type="text" name="username" onChange={changeName}/>
                <p>Enter your age:</p>
                {errormessage}
                <input type="text" name="age" onChange={changeAge}/>
                <button>Submit</button>

                <p>Textarea:</p>
                <textarea
                    value={value}
                    placeholder="Write smth here..."
                    onChange={val => setValue(val)}
                />
                
                <p>Choose one option:</p>
                <select onChange={changeSelect}>
                    <option value="Volvo">Volvo</option>

                    <option value="Fiat">Fiat</option>

                    <option value="Lamborgini">Lamborgini</option>
                </select>

                <p><b>We will go on {opt}</b></p>
            </form>

        </div>
    )
}

export default Forms;