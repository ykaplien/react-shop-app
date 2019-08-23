import React from 'react';
import './Product.css';
export default props => (
    <div className={'Product'}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h2>Price: {props.price}</h2>
        <button onClick={props.handleClick}>Add to cart {props.title}</button>
    </div>
)