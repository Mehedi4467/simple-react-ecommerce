import React from 'react';
import './Category.css';

const Category = (props) => {

    return (

        <div className='col-6 col-md-3 mb-3'>
            <div className='text-center pointer bg-primary text-white p-3  rounded'>
                <h3>{props.data}</h3>
            </div>
        </div>
    );
};

export default Category;