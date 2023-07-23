import { useState, useEffect } from 'react';

//useState, useEffect - hooks


const Counter = (props) => {
    //let count = 0;

    //const [variable, setVariable] = useState(initialize_state of variable)
    const [count, setCount] = useState(10);


    //called only once if I write [], if no - after change every time call it
    //it listening changes inside array.
    
    useEffect(() => {
        console.log(count);
    }, [])


    const handleClick = () => {
        //count++;

        // call function setCount(what do?)
        setCount(count+1);
    }

    return(
        <div>
            <h1>Function Counter: </h1>
            <h3>{count}</h3>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Counter;