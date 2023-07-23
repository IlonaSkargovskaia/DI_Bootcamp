import { useState } from 'react';
import './App.css';



function App() {

  const [languages, setLanguages] = useState(
    [
      {name: "Php", votes: 0},
      {name: "Python", votes: 0},
      {name: "JavaSript", votes: 0},
      {name: "Java", votes: 0}
    ]
  )
  
  const changeVoite = (index) => {
      console.log(index);
      const updatedLanguages = [...languages]; 
      updatedLanguages[index] = { ...updatedLanguages[index], votes: updatedLanguages[index].votes + 1 };
      setLanguages(updatedLanguages);
  }

  return (
      <header>
        <h1>Vote Your Language!</h1>
        <div className='languages'>
          {
            languages.map((item, index) => {
              return (
                <div className='block' key={index}>
                  <div>{item.votes}</div>
                  <div>{item.name}</div>
                  <button onClick={() => changeVoite(index)}>Click here</button>
                </div>
              )
            })
          }
        </div>
      </header>
  );
}

export default App;
