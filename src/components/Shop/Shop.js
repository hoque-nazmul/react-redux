import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [{name: 'HP Leptop', id: 1},{name: 'Mac Leptop', id: 2},{name: 'ASUS Leptop', id: 3},{name: 'LENOVO Leptop', id: 4},{name: 'Dell Leptop', id: 1},{name: 'Toshiba Leptop', id: 1},{name: 'LightWeight Leptop', id: 1},]
    return (
        <div>
            <h1>I am from Shop</h1>
            {
                products.map(pd => <Product products = {pd}></Product>)
            }
        </div>
    );
};

export default Shop;