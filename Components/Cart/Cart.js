import React,{ Component} from "react";
import products from '../../App';
class Cart extends Component {
    render() {
        console.log(products);
        return (
            <div>
                <p>This is Cart</p>
            </div>
        );
    }
}

export default Cart;