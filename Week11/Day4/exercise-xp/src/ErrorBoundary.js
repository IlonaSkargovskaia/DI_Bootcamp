import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(err, errInfo) {
        console.log("err=>", err);
        console.log("errInfo=>", errInfo);
        this.setState({hasError: true})
    }
    
    render() { 
        if (this.state.hasError) {
            return (
                <h1>Oops...Somethig went wrong</h1>
            )
        }
        return ( 
            this.props.children
        );
    }
}
 
export default ErrorBoundary;