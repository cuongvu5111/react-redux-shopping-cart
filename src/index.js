import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { getAllProducts } from './actions'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

store.dispatch(getAllProducts())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
