import { useState } from "react";
import Garage from './Garage'

const Car = (props) => {
    const {info} = props;
    const {model} = info;

    const [color] = useState('blue');


    return (
        <div>
            <Garage size="small" />
            <p>This car is {color} {model}</p>
        </div>
    )
}

export default Car;