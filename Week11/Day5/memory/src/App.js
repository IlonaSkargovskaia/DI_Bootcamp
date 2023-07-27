import Cards from "./components/Cards";
import "./App.css";

function App() {
    return (
        <div>
            <header>
                <div className="header__block">
                    <div className="container">
                        <h1>Superheroes Memory Game</h1>
                        <div className='score__block'>
                            <div className="score">Score: </div>
                            <div className="score__top">Top score: </div>
                        </div>
                    </div>
                </div>
                <div className="points__block">
                        <h3>Get points by clicking on image, but don't click on any more than once!</h3>
                </div>
            </header>
            <main>
                <Cards />
            </main>
        </div>
    );
}

export default App;
