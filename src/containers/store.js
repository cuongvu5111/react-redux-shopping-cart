import { createStore } from 'redux';
import reducer from '../reducers'
import { getAllProducts } from '../actions'


const initState = {
    products: {getAllProducts},
};

export default function configureStore(initialState= initState) {
    return createStore(
        reducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}