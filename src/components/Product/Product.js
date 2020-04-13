import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name} = props.products;
    return (
        <div>
            <div className="productWrapper">
                <h4>{name}</h4>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;