import React from "react";
import './menu-button.styles.scss'

const MenuButton = ({children, ...otherProps} ) => (
  <button className='menu-button' {...otherProps}>
    {children}
  </button>
)

export default MenuButton;