import {Routes, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ErrorBoundary from './ErrorBoundary';

const HomeScreen = () => <h1>Home</h1>;
const ProfileScreen = () => <h1>Profile</h1>;
const ShopScreen = () => {
  throw new Error("The error has occured...");
};

function App() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
          </li>
        </ul>
        </nav>
        <Routes>
          <Route path = '/' element={<ErrorBoundary><HomeScreen/></ErrorBoundary>}/>
          <Route path = '/profile' element={<ErrorBoundary><ProfileScreen/></ErrorBoundary>}/>
          <Route path = '/shop' element={<ErrorBoundary><ShopScreen/></ErrorBoundary>}/>
        </Routes>
      </div>
  );
}

export default App;
