export const Favorites = (props) => {
    const {favorites} = props;
    console.log(favorites);
    return (
        <>
            <h1>Favorites</h1>
            <ul>
                {favorites.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}