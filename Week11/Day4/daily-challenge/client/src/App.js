import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    const getText = async () => {
      try {
          const res = await fetch(`http://localhost:3005/api/hello`);
          const data = await res.json();
          //console.log(data);
          this.setState({header: data});
      } catch (error) {
          console.log(error);
      }
    }
    getText();
  }
  
  render() { 
    return ( 
      <div className="App">
        <header>
          <h1>{this.state.header}</h1>
          <h2>Post to Server:</h2>
          
        </header>
      </div>
    );
  }
}
 
export default App;
