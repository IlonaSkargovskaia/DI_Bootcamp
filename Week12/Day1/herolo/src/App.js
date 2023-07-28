import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Favorites } from "./components/Favorites";
import { Home } from './components/Home'


function App() {
        
    return (

        <div>
            <header>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/favorites' element={<Favorites/>}/>
                </Routes>
            </header>
            
   
        </div>
    );
}

export default App;
