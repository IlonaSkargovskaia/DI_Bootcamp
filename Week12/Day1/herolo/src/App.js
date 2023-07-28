import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Favorites } from "./components/Favorites";
import { Home } from './components/Home'


function App() {
        
    return (

        <div>
            <header>
                <h2>Herolo Weather Task</h2>
                <nav>
                    <Link to="/">Home</Link>{" "}
                    <Link to="/favorites">Favorites</Link>{" "}
                </nav>
                
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/favorites' element={<Favorites/>}/>
                </Routes>
            </main>
            
        </div>
    );
}

export default App;
