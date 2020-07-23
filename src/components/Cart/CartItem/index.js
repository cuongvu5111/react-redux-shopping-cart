import React from 'react'

const CartItem = ({ product, onRemoveClick}) => {

    return (
        <div>
            <div className="image" style={{width:'50px', height:'50px', display:'inline-block'}}>
                <img src={product.img} alt={product.name} style={{width: '100%', height:'100%'}}/>
            </div>
            <p style={{display:'inline-block'}}>{product.name} - {product.price} x <span style={{fontWeight: 'bold'}}>{product.quantity}</span></p>
            <p onClick={onRemoveClick}><a href="#">Remove</a></p>
        </div>
    );
}


export default CartItem
