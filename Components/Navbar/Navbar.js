import React from 'react';
import App from "../../App";
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = ()=>{
    return(
      <ul>
        <li>
          <Link to="/">ProductList</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    )
};

export default Navbar;