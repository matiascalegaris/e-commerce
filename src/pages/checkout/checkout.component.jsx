import React from "react";
import './checkout.styles.scss'
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import { useSelector } from "react-redux";


const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalValue = useSelector(selectCartTotal);

  return (
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
)};
 
export default Checkout;