import React from 'react';
import { Link } from "react-router-dom";

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