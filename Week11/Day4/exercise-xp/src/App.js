import { Routes, Route, Link } from "react-router-dom";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

const HomeScreen = () => <h1>Home</h1>;
const ProfileScreen = () => <h1>Profile</h1>;
const ShopScreen = () => {
  throw new Error("The error has occured...");
};

const getFromUrl = async() => {
    const data = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27

    }

    try {
        const res = await fetch('https://webhook.site/38c1cf14-a3c8-4721-b617-7e596355c05a', {
            method: 'POST',
            mode: "no-cors", // Add this line to disable CORS
            headers: {
                'Content-Type': 'application-json'
            },
            body: JSON.stringify(data)
        });
        console.log(res);
    } catch (error) {
        console.log(error);
    }

}


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>
    
    
      {/* Exercise2 */}
      <PostList />
      {/* Exercise 3 */}
      <Example1 />
      <Example2 />
      <Example3 />


      {/* Exercise4 */}
          <button onClick={getFromUrl}>Press me to post data</button>
    </div>

    
  );
}

export default App;
