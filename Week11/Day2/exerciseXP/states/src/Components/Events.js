import { useState } from 'react';

const Events = () => {

    const [isToggleOn, setValue] = useState(true);
    //console.log(isToggleOn)

    const changeState = () => {
        setValue(!isToggleOn);
    }

    const handleKeyDown = (e) => {
        const inputValue = e.target.value; 
        if (e.keyCode === 13) {
            // console.log(inputValue);
            alert(`The Enter key was pressed, your input is:  ${inputValue}`);
        }
        
    }
    
    const clickMe = () => {
        alert('I was clicked');
    }

    return (
        <>
            <button onClick={clickMe}>Click</button>
            < br />
            <input type="text" placeholder="Press the Enter key" onKeyDown={handleKeyDown}/>
            < br />
            {

            }
            <button onClick={changeState}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </>
    )

    

}



export default Events;