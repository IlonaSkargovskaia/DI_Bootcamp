import { useState } from 'react';

const Phone = () => {
    const [brand,setBrand]=useState("Samsung");
    const [model,setModel]=useState("Galaxy S20");
    const [color,setColor]=useState("black");
    const [year,setYear]=useState(2020);


    const changeColor = () => {
        setColor('blue');
    }
    

    return (
        <div style={{border: '1px solid #ccc', margin: '1rem', padding: '1rem'}}>
          <h2>My phone is a {brand}</h2> 
          <p>It is a {color} {model} from {year}</p>
          <button onClick={changeColor}>Change color</button>
        </div>
    )
}

export default Phone;