import React from 'react';
import './Product.css';

const Product = (props) => {

    return (
        <div className='col-6 col-md-3 my-5 p-4'>
            <div className='productImage'>
                <img className='img-fluid' src={props.data.image} alt="" />
            </div>
            <div className='text-center mt-4'>
                <p className='text-truncate'>{props.data.title}</p>
                <p className='price'><span className='text-primary'>${props.data.rating.count}</span> {props.data.rating.rate}<i className="fa-solid fa-star"></i></p>
                <button className='btn btn-primary'>Buy Now</button>
            </div>

        </div>
    );
};

export default Product;