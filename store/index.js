import {createStore, compose, applyMiddleware} from 'redux';
import Reducers from './redux/reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
