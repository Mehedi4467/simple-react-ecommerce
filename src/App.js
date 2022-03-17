
import './App.css';
import Categorys from './Components/Categorys/Categorys';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Categorys></Categorys>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
