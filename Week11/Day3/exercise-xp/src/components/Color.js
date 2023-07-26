import React, { Component } from "react"


class Color extends Component{
    constructor(props) {
      super(props);
      this.state = {favoriteColor : "red"};
    }

    //shouldComponentUpdate 2. If you set the return value of the shouldComponentUpdate() method to false, you won’t be able to change the value of the favoriteColor property to “blue”, (even after clicking on the button)
    
    shouldComponentUpdate() {
        return true
    }
    //componentDidUpdate. 3. In the componentDidUpdate method, add a console.log("after update"). Open the Dev Tools, to see when this message is displayed.

    componentDidUpdate() {
        console.log("after update");
    }

    //getSnapshotBeforeUpdate Use the getSnapshotBeforeUpdate() method, add a console.log("in getSnapshotBeforeUpdate"). Open the Dev Tools, to see when this message is displayed.
    componentWillUnmount() {
        console.log("in getSnapshotBeforeUpdate");
    }

    changeColor = () => {
        this.setState({favoriteColor : "blue"});
    }

    render() {
        console.log("render")
       return (

           <>
            <h1>My favorite color is : {this.state.favoriteColor}</h1>
            <button onClick={ this.changeColor }>Change color</button>
           </>
       )
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor:"yellow"})
        },5000)
    }
}
   
  

export default Color;