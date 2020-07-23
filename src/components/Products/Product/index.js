import React from 'react'
import {Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Product = ({ product, onAddToCartClicked }) => (


        <Col xs={6} md={2} key={product.id} style={{marginBottom:'20px'}}>
            <div className="image" style={{width:'180px', height:'140px'}}>
                <img src={product.img} alt={product.name} style={{width: '100%', height:'100%'}}/>
            </div>

            <p>{product.name} x <span style={{color:'red'}}>{product.inventory}</span></p>
            <p><span>{product.price_currency}</span>{product.price}</p>
            <Button
                onClick={onAddToCartClicked}
                variant="primary"
                disabled={product.inventory > 0 ? '' : 'disabled'}
            >{product.inventory > 0 ? 'Add to cart' : 'Sold Out'}</Button>{' '}
        </Col>


);


export default Product
