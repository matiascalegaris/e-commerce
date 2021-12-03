import React from "react";
import './menu-button.styles.scss'

const MenuButton = ({children, isGoogleSignIn, ...otherProps} ) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } menu-button`} 
  {...otherProps} >
    {children}
  </button>
)

export default MenuButton;