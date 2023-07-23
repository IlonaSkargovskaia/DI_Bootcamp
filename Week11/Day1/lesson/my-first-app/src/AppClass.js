import React, {Component} from 'react';
import Name from './components/Name.js'


class AppClass extends Component {
    constructor() {
        super();
        //use State
        this.state = {
            name: 'John',
            users: [],
        };
    }


    handleClick = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();

            console.log(data);
            this.setState({users : data});

        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                {/* <button onClick={this.handleClick}>Click!</button>
                {
                    this.state.users.map(item => {
                        return (
                            <h1>{item.name}</h1>
                        )
                    })
                } */}

                <Name name= {this.state.name} />
            </>
        )
    }

}

export default AppClass;