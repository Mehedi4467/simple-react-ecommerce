import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart }) => {
    // console.log(cart.length);
    return (
        <div className='cart'>
            <div className='cart-body'>
                <div className='quantity'>
                    <p>{cart.length}</p>
                </div>
                <FontAwesomeIcon icon={faBasketShopping} size='3x' color='blue' ></FontAwesomeIcon>

            </div>
        </div>
    );
};

export default Cart;