const initState = {
    products : [
        {
            title : "Product 1",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price : 128,
            id : "15"
        },
        {
            title : "Product 2",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price : 9,
            id : "26"
        },
        {
            title : "Product 3",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price : 146,
            id : "23"
        },
        {
            title : "Product 4",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price : 256,
            id : "74"
        },
        {
            title : "Product 5",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price : 28,
            id : "89"
        }
    ],

    addedProducts:[],

    total: 0
};

const cartReducer = (state = initState, action) => {
    if(action.type === 'ADD_TO_CART'){
        let addedProduct = state.products.find(product=> product.id === action.id);
        let existed_product= state.addedProducts.find(product=> action.id === product.id);
        if(existed_product)
        {
            addedProduct.quantity += 1;
            return{
                ...state,
                total: state.total + addedProduct.price
            }
        }
        else{
            addedProduct.quantity = 1;
            let newTotal = state.total + addedProduct.price;

            return{
                ...state,
                addedProducts: [...state.addedProducts, addedProduct],
                total : newTotal
            }

        }
    }
    if(action.type === 'REMOVE_ITEM'){
        let itemToRemove= state.addedProducts.find(item=> action.id === item.id);
        let new_items = state.addedProducts.filter(item=> action.id !== item.id);
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
        return{
            ...state,
            addedProducts: new_items,
            total: newTotal
        }
    }

    if(action.type=== 'ADD_QUANTITY'){
        let addedItem = state.products.find(item=> item.id === action.id);
        addedItem.quantity += 1;
        let newTotal = state.total + addedItem.price;
        return{
            ...state,
            total: newTotal
        }
    }

    if(action.type=== 'SUB_QUANTITY'){
        let addedItem = state.products.find(item=> item.id === action.id);
        if(addedItem.quantity === 1){
            let itemToRemove= state.addedProducts.find(item=> action.id === item.id);
            let new_items = state.addedProducts.filter(item=> action.id !== item.id);
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
            return{
                ...state,
                addedProducts: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price;
            return{
                ...state,
                total: newTotal
            }
        }

    }
    return state
};

export default cartReducer;