import React from 'react';
import { removeFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h1>I am from Cart</h1>
            {
                cart.map(cart => <li key={cart.cartId}>{`${cart.id} ${cart.name}`}<button onClick={() => removeFromCart(cart.cartId)}>X</button></li>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart : removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);