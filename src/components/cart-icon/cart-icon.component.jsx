import React from "react";
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  let itemCount = useSelector(selectCartItemsCount);
  return (
    
    <div className='cart-icon' onClick={ () => dispatch(toggleCartHidden()) }>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)}


export default CartIcon;

