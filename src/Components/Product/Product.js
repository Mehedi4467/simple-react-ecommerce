import React from 'react';
import './Product.css';

const Product = ({ data, cartHandler }) => {
    // console.log(cartHandler);
    return (
        <div className='col-6 col-md-3 my-5 p-4'>
            <div className='productImage'>
                <img className='img-fluid' src={data.image} alt="" />
            </div>
            <div className='text-center mt-4'>
                <p className='text-truncate'>{data.title}</p>
                <p className='price'><span className='text-primary'>${data.price}</span> {data.rating.rate}<i className="fa-solid fa-star"></i></p>
                <button onClick={() => cartHandler(data)} className='btn btn-primary'>Add Cart</button>
            </div>

        </div>
    );
};

export default Product;