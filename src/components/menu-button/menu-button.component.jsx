import React from "react";
import {MenuButtonContainer} from './menu-button.styles.jsx'

const MenuButton = ({children, ...otherProps} ) => (
  <MenuButtonContainer {...otherProps} >
    {children}
  </MenuButtonContainer>
)

export default MenuButton;