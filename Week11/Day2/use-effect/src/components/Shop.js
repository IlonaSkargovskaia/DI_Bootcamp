import {useState, useEffect} from 'react';

const Shop = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://localhost:3030/api/products/');
                const data = await res.json();

                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return(
        <>
        
        {
            products.map(item => {
                return (
                    <div key = {item.id}>
                        <h2>{item.name}</h2>
                        <h4>{item.price}</h4>
                    </div>
                )
            })
        }
        </>
    )
}

export default Shop;