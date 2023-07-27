import React, { Component } from 'react';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford',
            model: 'Mustang',
            carColor: 'red',
            year: 1994
        }
    }

    changeColor = () => {
        let {colors} = this.props;
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        this.setState({carColor: [randomColor]})
    }
    
    render() { 
        return ( 
        <>
            <h2>My {this.state.brand}</h2>
            <h2>Color {this.state.carColor}</h2>
            <button onClick={this.changeColor}>Change color</button>
        </> );
    }
}
 
export default Car;