import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setPoducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(product => setPoducts(product))
    }, []);

    return (
        <div className='container'>
            <h1>Just for You</h1>
            <div className='row'>
                {
                    products.map(product => <Product data={product} key={product.id}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;