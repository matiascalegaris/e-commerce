import React from "react";
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({price}) => {
    const finalPrice = price * 100;
    const public_key = 'pk_test_51K6hyOCQl4qGZ7BcBcSpB8Ued2icIDaCbnfwSZFQTynaQJPady2OupseMpJXu3m57v7a5LKIziw9t6jk7eDBgAsI008qnrWPje';

    const onToken = token => {
        console.log("payment success" );
        console.log(token);
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='EComerce'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={finalPrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={public_key} />
)}

export default StripeButton;