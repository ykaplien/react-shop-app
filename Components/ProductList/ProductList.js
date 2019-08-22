import React from 'react';
import Product from '../Product/Product';
import { productsDb } from '../../Database/ProductsDB';

function ProductList() {
    return (productsDb.map((product) => {
        return (
            <Product title={product.title} description={product.description} price={product.price} id={product.id} key={product.id}/>
        )
    }))
}

export default ProductList;