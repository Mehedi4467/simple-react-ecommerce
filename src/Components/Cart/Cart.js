import React, { useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';


const Cart = ({ cart, deleteAll, singleCartRemove }) => {
    const [modal, setModal] = useState(false);
    console.log(cart);



    return (
        <div className='cart'>
            <div className='cart-body'>
                <div className='quantity'>
                    <p>{cart.reduce((sum, current) => sum + current.rating.count, 0)}</p>
                </div>
                <div className="button" onClick={() => setModal(true)}> <FontAwesomeIcon icon={faBasketShopping} size='3x' color='blue' ></FontAwesomeIcon>
                </div>

            </div>
            {/* modal component */}
            <PureModal

                header="Cart Summery"
                footer={
                    <div>
                        <button onClick={() => deleteAll()} className='btn-cart'>Remove All</button>
                        <button className='btn-cart'>Buy Now</button>
                    </div>
                }
                isOpen={modal}
                closeButton="X"
                closeButtonPosition="bottom"
                onClose={() => {
                    setModal(false);
                    return true;
                }}
            >

                <div className='product-header'>

                    <table className='product-list'>
                        <tbody>
                            <tr >
                                <th>Product</th>

                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                            {
                                cart.map(product =>
                                    <tr key={product.id}>
                                        <td><img src={product.image} height={50} width={50} alt={product.title} /></td>

                                        <td>
                                            {product.rating.count}
                                        </td>
                                        <td>$

                                            {(product.price * product.rating.count).toFixed()}
                                        </td>
                                        <td onClick={() => singleCartRemove(product.id)} className='item' ><p className='item-delete'>X</p></td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>

                    <div className="grand-total">
                        <h5>Total $ {
                            cart.reduce((sum, current) => sum + current.price * current.rating.count, 0).toFixed(2)
                        }</h5>
                    </div>
                </div>

            </PureModal>

        </div>
    );
};



export default Cart;