import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../Cart-item';
import CustomButton from '../Custom-button';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './styles.scss';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                }
            </div>
            <CustomButton> GO TO CHECKOUT </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown);