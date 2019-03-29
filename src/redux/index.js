import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { blog } from './blog/blog-reducer';
import logger from 'redux-logger';

export const configureStore = () => {
    const middlewares = [thunk];
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(logger);
    }

    return createStore(
        combineReducers({ blog }),
        compose(applyMiddleware(...middlewares))
    );
};
