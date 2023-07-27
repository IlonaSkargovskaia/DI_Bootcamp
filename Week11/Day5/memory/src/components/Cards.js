import heroies from '../superheroies.json';

const Cards = (props) => {
    return (
        <div className="row">
            {
                heroies.superheroes.map(item => {
                    return (
                        <div className="card">
                            <div className="card__img">
                                <img src={item.image} />
                            </div>
                            <div className="card__desc">
                                <p>Name: {item.name}</p>
                                <p>Occupation: {item.occupation}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards;