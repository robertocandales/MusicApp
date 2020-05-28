import {createStore, applyMiddleware} from 'redux';
import Reducers from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(Reducers, applyMiddleware(thunk));
export default store;
