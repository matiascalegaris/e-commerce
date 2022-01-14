import React from "react";
import { useDispatch } from "react-redux";
import { clearItemFromCart, removeItem, addItem } from "../../redux/cart/cart-actions";
import './checkout-item.styles.scss';

const CheckoutItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={item.imageUrl} alt='item' />
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => dispatch(removeItem(item))} > &#10094;</div>
            <div className='value'>{item.quantity}</div>
            <div className='arrow' onClick={() => dispatch(addItem(item))} > &#10095;</div>
        </span>
        <span className='price'>{item.price}</span>
        <span className='remove-button' onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</span>
    </div>
)}


export default CheckoutItem;