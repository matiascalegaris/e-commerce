import React from "react";
import MenuButton from "../menu-button/menu-button.component";
import './collection-item.styles.scss'
import { addItem } from '../../redux/cart/cart-actions'
import { useDispatch } from "react-redux";

const CollectionItem = ({item}) => {
    const {imageUrl, name, price} = item;
    const dispatch = useDispatch();

    return (
  <div className='collection-item'>
    <div
    className='image'
    style= {{
      backgroundImage: `url(${imageUrl})`
    }}/>
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <MenuButton inverted onClick={()=> dispatch(addItem(item))}> Add to cart </MenuButton>
  </div>
)}


export default CollectionItem;