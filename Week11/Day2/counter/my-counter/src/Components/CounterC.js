import React, { Component } from 'react';

class CounterC extends Component {
    constructor(props) {
        super(props);
        //this.count = 0;
        this.state = {
            count: 0
        }
       
    }

    handleClick = () => {
        //setState - async function, if i want console.log(current) - this.setState({count: this.state.count + 1}, () => {  console.log(this.state.count); })

        this.setState({count: this.state.count + 1})
        //will be previous state
        console.log(this.state.count);


        // this.count++;
        // console.log(this.count);
    }

    //automatically from react after then info render (last thing)
    // componentDidMount = () => {
    //     console.log(3, 'componentDidMount');
    // }

    //optional function: everytime if I change smth in state and recall render
    // componentDidUpdate = () => {
    //     console.log('re-render');
    // }
    
    //to call render again we need to use useState()
    render() { 
        
        return ( 
            <div>
                <h1>Class Counter: </h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.handleClick}>Add</button>
            </div>
         );
    }
}
 
export default CounterC;