import { Routes, Route, Link } from "react-router-dom";



function Header(props) {
    return ( 
        <>
        <nav>
            <Link to="/">Home</Link>{" "}
            <Link to="/favorites">Favorites</Link>{" "}
        </nav>
        
            <h2>Herolo Weather Task</h2>
        </>
     );
}

export default Header;