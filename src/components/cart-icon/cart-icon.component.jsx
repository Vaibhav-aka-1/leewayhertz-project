import React from 'react';
import {connect} from 'react-redux';


import './cart-icon.style.scss';

import {selectCartItemsCount} from '../../redux/cart/cart.selector.js';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCardHidden} from '../../redux/cart/cart.action';

const CartIcon = ({toggleCardHidden , itemCount}) => (
    <div className = 'cart-icon' onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
) 

const mapStateToprops = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
});

export default connect(mapStateToprops , mapDispatchToProps)(CartIcon);