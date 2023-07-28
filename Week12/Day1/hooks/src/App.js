import Parent from './components/Parent';
import {useState, createContext, useRef } from 'react';
import './App.css';

export const AppContext = createContext();

function App() {
  const [text, setText] = useState('Hello');

  //without rendering
  const inputRef = useRef();
  const headerRef = useRef();
  // inputRef.current = 'bbb'
  // console.log(inputRef);

  //the same
  // let a = 0;
  // a = {name: 'bbb'};
  // console.log(a);

  const handleRef = () => {
    console.log(inputRef.current.value);
    //like document.getElementByID
    console.log(headerRef.current);
  }

  return (
    <div className="App">
      <header className="App-header" ref={headerRef}>
        
        <AppContext.Provider value={{text, setText, a: 'Alla'}}>
          <Parent />
        </AppContext.Provider>


        <input ref={inputRef} onChange={handleRef}/>
      </header>
    </div>
  );
}

export default App;
