import React from "react";
import './cart-dropdown.styles.scss';
import MenuButton from "../menu-button/menu-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom'
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({cartItems, dispatch}) => {
    let navigate = useNavigate();
    function goToCheckout() {
        navigate('/checkout');
        dispatch( toggleCartHidden() )
    }
    return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length > 0 ?
                cartItems.map( item => <CartItem key={item.id} item={item} />) :
                <span className='empty-message'> Your cart is empty </span>
            }
        </div>
        <MenuButton onClick={ goToCheckout }>GOT TO CHECKOUT</MenuButton>
    </div>
)}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default connect(mapStateToProps)(CartDropdown);