import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        all()
    }, [])

    const all = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/products`);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h1>Shop</h1>
            {
                products.map(item => {
                    return (
                        <div key={item.id} style={{
                            display: 'inline-block',
                            padding: '20px',
                            margin: '10px',
                            border: '1px solid #ccc'
                        }}>
                            <h4>{item.name} </h4>
                            <h5>{item.price} </h5>
                            <Link style={{color: 'white'}} to={`/${item.id}`}>Shop</Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Products;