import Product from '../Product/Product';

const Products = ({ products, cartHandler }) => {

    return (
        <div className='container'>
            <h1>Just for You</h1>
            <div className='row'>
                {
                    products.map(product => <Product data={product} key={product.id} cartHandler={cartHandler}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;