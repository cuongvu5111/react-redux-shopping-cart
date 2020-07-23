import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Button, Container, Modal} from 'react-bootstrap';
import { getTotal, getCartProducts } from '../../reducers'
import { checkout, removeToCart } from '../../actions'
import CartItem from './CartItem'

const Cart = ({ products, total, checkout, removeToCart }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const hasProducts = products.length > 0 && total > 0;

    const itemCart = hasProducts ?
        products.map((product,index) => (
            <div key={index}>
                {product.quantity > 0 ?
                    (<CartItem product={product} onRemoveClick={() => removeToCart(product.id)} />) : ''
                }

            </div>
        )) : <h5> Empty...</h5>;
    const handleCheckout = () => {
        checkout(products);
    };
    return (
        <Container style={{marginTop: '10px'}}>
            <Button variant="warning" onClick={handleShow}>
                CART
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {itemCart}
                    {hasProducts ? (<h3>Total: {total}</h3>) : ''}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant={hasProducts ? "primary" : "secondary"} disabled={!hasProducts} onClick={handleCheckout}>
                        Checkout
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
};

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    { checkout, removeToCart }
)(Cart)
