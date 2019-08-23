import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from '../Actions/cartActions';
import './Cart.css';

class Cart extends Component{

    handleRemove = (id) => {
        this.props.removeItem(id);
    };
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    };
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    };

    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(product=>{
                    return(

                        <li className={'Product'} key={product.id}>
                            <div>
                                <span>{product.title}</span>
                                <p>{product.desc}</p>
                                <p><b>Price: {product.price}$</b></p>
                                <p>
                                    <b>Quantity: {product.quantity}</b>
                                </p>
                                <div>
                                    <ul>
                                        <li><Link to="/cart"><i onClick={()=>{this.handleAddQuantity(product.id)}}>Add one</i></Link></li>
                                        <li><Link to="/cart"><i onClick={()=>{this.handleSubtractQuantity(product.id)}}>Remove one</i></Link></li>
                                    </ul>
                                </div>
                                <button onClick={()=>{this.handleRemove(product.id)}}>Remove</button>
                            </div>

                        </li>
                    )
                })
            ):

            (
                <p>Nothing.</p>
            );
        let totalPrice = this.props.total;
        return(
            <div>
                <div>
                    <h5>You have ordered:</h5>
                    <ul>
                        {addedItems}
                    </ul>
                    <h2>
                        Total price: {totalPrice}$
                    </h2>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        total: state.total,
        items: state.addedProducts
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);