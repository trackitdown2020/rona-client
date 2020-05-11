import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (initialState={}) => {
    const middlewares = [thunk, logger]
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(...middlewares)),
    );
}