import React, {Component} from 'react';
import ProductList from './Components/ProductList/ProductList';
import Navbar from './Components/Navbar/Navbar';
import Cart from "./Components/Cart/Cart";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar/>
            <Route path="/" exact component={ProductList} />
            <Route path="/Cart" component={Cart} />
          </div>
        </Router>
    );
  }
}

export default App;