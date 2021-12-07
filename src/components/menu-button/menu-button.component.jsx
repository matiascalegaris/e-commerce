import React from "react";
import './menu-button.styles.scss'

const MenuButton = ({children, isGoogleSignIn, inverted, ...otherProps} ) => (
  <button className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } menu-button`} 
  {...otherProps} >
    {children}
  </button>
)

export default MenuButton;