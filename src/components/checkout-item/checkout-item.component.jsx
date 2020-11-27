/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {connect} from 'react-redux';

import './checkout-item.style.scss';

import {cleanItemFromCart, addItem , removeItem} from '../../redux/cart/cart.action';



const CheckoutItem = ({cartItem,clearItem,addItem,removeItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src = {imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>

        <span className='quantity'>
        <div className='arrows' onClick={()=>removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrows'onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>

        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>  
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(cleanItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);