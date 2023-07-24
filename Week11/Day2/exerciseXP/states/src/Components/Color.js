import {useState, useEffect} from 'react';

const Color = () => {
    const [favoriteColor, setFavorite] = useState('red');

    useEffect(() => {
        alert('useEffect reached');
        setFavorite('yellow')
    }, []);

    const changeColor = () => {
        setFavorite('blue');
    }

    return (
        <>
            <h3>My Favorite Color is <i>{favoriteColor}</i></h3>
            <button onClick={changeColor}>Change color</button>
        </>
    )
}

export default Color;