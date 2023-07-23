const Product = (props) => {

    //console.log(props);
    // const {info} = props;
    const {name, price} = props.info;

    return (
        <div>
            <h2>Product Name: {name}</h2>
            <p>Product price: {price}</p>
        </div>
    )
}

export default Product;