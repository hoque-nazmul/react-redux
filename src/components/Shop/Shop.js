import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    const {products, addtoCart} = props;
    return (
        <div>
            <h1>I am from Shop</h1>
            {
                products.map(pd => <Product key={pd.id} addtoCart={addtoCart} products = {pd}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addtoCart: addToCart
}

// const connentStore = connect(mapStateToProps, mapDispatchToProps);
// connentStore(Shop)

export default connect(mapStateToProps, mapDispatchToProps)(Shop);