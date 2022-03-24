import './App.css';
import { useState, useEffect } from 'react';
import Cart from './Components/Cart/Cart';
import Categorys from './Components/Categorys/Categorys';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  const [products, setPoducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(product => setPoducts(product))
  }, []);

  const [cart, setCart] = useState([]);

  const cartHandler = (product) => {
    let newCart = [];
    const exists = cart.find((cartProduct) => product.id === cartProduct.id);
    if (!exists) {
      product.rating.count = 1;
      newCart = [...cart, product];

    }
    else {
      const rest = cart.filter(cartProduct => cartProduct.id !== product.id);
      product.rating.count += 1;

      newCart = [...rest, exists];

    }
    setCart(newCart);

  };

  const deleteAll = () => {

    const newCart = [];
    setCart(newCart);

  };

  const singleCartRemove = (id) => {

    const deleteIndex = cart.map((deleteProduct, index) => deleteProduct.id === id ? index : false);
    let newCart = [...cart];
    console.log(deleteIndex);
    if (deleteIndex) {
      newCart.splice(deleteIndex, 1);
    }
    setCart(newCart);

  }





  return (
    <div>
      <Header></Header>
      <Cart cart={cart} deleteAll={deleteAll} singleCartRemove={singleCartRemove}></Cart>
      <Categorys></Categorys>

      <Products products={products} cartHandler={cartHandler} ></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
