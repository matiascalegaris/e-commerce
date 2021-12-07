import React from "react";
import { connect } from "react-redux";
import MenuButton from "../menu-button/menu-button.component";
import './collection-item.styles.scss'
import { addItem } from '../../redux/cart/cart-actions'

const CollectionItem = ({item, addItem}) => {
    const {imageUrl, name, price} = item;
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
    <MenuButton inverted onClick={()=> addItem(item)}> Add to cart </MenuButton>
  </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);