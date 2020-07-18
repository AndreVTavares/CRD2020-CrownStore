import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/Checkout-item';
import StripeCheckoutButton from '../../components/Stripe-button';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


import './styles.scss';


const CheckoutPage = ({ cartItems, cartTotal }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className="total">
                Total: ${cartTotal}
            </div>
            <StripeCheckoutButton price={cartTotal}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage);