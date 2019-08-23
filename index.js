import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import cartReducer from './Components/Reducers/cartReducer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
