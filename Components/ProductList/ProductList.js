import React, { Component } from 'react';
import Product from '../Product/Product';
import { connect } from 'react-redux';
import { addToCart } from '../Actions/cartActions';

const mapStateToProps = (state) =>{
    return {
        products: state.products
    }
};

const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
};

class ProductList extends Component{

    handleClick = (id) => {
        this.props.addToCart(id);
    };

    render() {
        let productsList = this.props.products;
        return (productsList.map((product) => {
            return (
                <Product title={product.title}
                         description={product.description}
                         price={product.price} id={product.id}
                         key={product.id}
                         handleClick={() => this.handleClick(product.id)}
                />
            )
        }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);