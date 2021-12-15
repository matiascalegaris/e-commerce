import React from "react";
import { connect } from "react-redux";
import './checkout.styles.scss'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";


const Checkout = ({cartItems, totalValue}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map( cartItem => (<CheckoutItem item={cartItem}/>))
        }
        <div className='total'>
            <span>Total: ${totalValue}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for testing
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
        </div>
        <StripeButton price={totalValue} />
    </div>
);
 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartTotal
})
export default connect(mapStateToProps)(Checkout);