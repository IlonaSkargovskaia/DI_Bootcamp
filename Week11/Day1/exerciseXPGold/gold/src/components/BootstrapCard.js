

const BootstrapCard = (props) => {
    //console.log(props);
    const {celebrity} = props;
    return (
        <div className="card m-5" style={{width: '30rem'}}>
            <img className="card-img-top" src={celebrity.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{celebrity.title}</h5>
                <p className="card-text">{celebrity.description}</p>
                <a href={celebrity.buttonUrl} className="btn btn-primary">{celebrity.buttonLabel}</a>
            </div>
        </div>
    )
}

export default BootstrapCard;