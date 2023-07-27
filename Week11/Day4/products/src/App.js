import Products from './components/Products';
import Product from './components/Product';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* list of products */}
          <Route path="/" element={<Products />}/>
          {/* one product */}
          <Route path="/:id" element={<Product />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
