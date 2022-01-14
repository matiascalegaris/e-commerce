import React from "react";
import './cart-dropdown.styles.scss';
import MenuButton from "../menu-button/menu-button.component";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { useNavigate } from 'react-router-dom'
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { useDispatch } from "react-redux";

const CartDropdown = () => {
    let navigate = useNavigate();
    let cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
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

export default CartDropdown;