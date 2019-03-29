import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { Provider } from 'react-redux';
import './global.css';
import { App } from './app';
import { configureStore } from './redux';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
