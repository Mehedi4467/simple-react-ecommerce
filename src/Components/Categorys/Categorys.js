import React, { useEffect, useState } from 'react';
import Category from './Category/Category';
import './Categorys.css';
const Categorys = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, []);

    return (
        <div className='container my-5'>
            <h2 className='mb-5'>Category</h2>
            <div className='container'>
                <div className='row'>

                    {
                        category.map(x => <Category data={x} key={x}></Category>)
                    }

                </div>

            </div>
        </div>
    );
};



export default Categorys;