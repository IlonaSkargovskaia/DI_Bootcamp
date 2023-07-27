import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: null
    }
  }

  componentDidMount() {
    const getText = async () => {
      try {
          const res = await fetch(`http://localhost:3001/api/hello`);
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
          
        </header>
      </div>
    );
  }
}
 
export default App;
