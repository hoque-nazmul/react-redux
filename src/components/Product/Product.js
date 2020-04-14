import React from 'react';
import './Product.css'

const Product = (props) => {
    const {products, addtoCart} = props;
    return (
        <div>
            <div className="productWrapper">
                <h4>{products.name}</h4>
                <button onClick={() => addtoCart(products.id, products.name)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;