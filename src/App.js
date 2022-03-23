
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

    const newCart = [...cart, product];
    setCart(newCart);

  };

  return (
    <div>
      <Header></Header>
      <Cart cart={cart}></Cart>
      <Categorys></Categorys>

      <Products products={products} cartHandler={cartHandler}></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
