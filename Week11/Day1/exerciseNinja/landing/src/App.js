import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <header className='header'>
          <Header />
      </header>
      <main>
          <Card />
      </main>
      <footer>
          <Contact />
      </footer>
    </div>
  );
}

export default App;
