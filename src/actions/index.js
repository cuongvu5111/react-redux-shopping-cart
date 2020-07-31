import _products from '../api/products'
import * as types from '../constants/ActionTypes'

const TIMEOUT = 100;
const getProducts = (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT);
const buyProducts = (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT);

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
});

export const getAllProducts = () => dispatch => {
    getProducts(products => {
        dispatch(receiveProducts(products))
    })
};

export const getProductById = (productId) => {
    if(_products.length > 0 ){
        return _products[productId-1];
    }

};
const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CART,
    productId
});


export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
};


const removeToCartUnsafe = (productId,inventory) => ({
    type: types.REMOVE_TO_CART,
    productId,
    inventory
});

export const removeToCart = (productId, inventory) => (dispatch) => {
        dispatch(removeToCartUnsafe(productId, inventory))
};

export const checkout = products => (dispatch, getState) => {
    const { cart } = getState();

    dispatch({
        type: types.CHECKOUT_REQUEST
    });
    buyProducts(products, () => {
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            cart
        })
    })
};




