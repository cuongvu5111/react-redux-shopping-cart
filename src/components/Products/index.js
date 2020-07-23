import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions'
import { getVisibleProducts } from '../../reducers/products'
import Product from './Product';
import { Container,Row } from 'react-bootstrap';

const Products = ({ products, addToCart }) => (
        <Container>
            <Row>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            onAddToCartClicked={() => addToCart(product.id)} />
                    )
                }
            </Row>
        </Container>
);

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
});

export default connect(
    mapStateToProps,
    { addToCart }
)(Products)
