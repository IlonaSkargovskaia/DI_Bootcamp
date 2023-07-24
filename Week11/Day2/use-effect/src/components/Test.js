import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'test',
            name: this.props.username
        };
        console.log('constructor');
    }

    componentDidMount = () => {
        console.log('componentDidMount');
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('prevProps: ', prevProps);
        console.log('prevState: ', prevState);
        console.log('componentDidUpdate');
    }

    handleChange = (e) => {
        this.setState({title: e.target.value});
    }
    
    render() { 
        console.log('render');
        return ( 
            <>
                <h1>{this.state.title}</h1>
                <input onChange={this.handleChange} placeholder='set title'/>
            </>
         );
    }
}
 
export default Test;