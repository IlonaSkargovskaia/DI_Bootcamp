import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Product = (props) => {
    const [product, setProduct] = useState([]);
    const params = useParams();


    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/products/${params.id}`);
            const data = await res.json();
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Product</h1>
            {
                product.map(item => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <h3>{item.price}</h3>
                            <Link to='/'>Back home</Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Product;