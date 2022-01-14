import React from "react";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles.jsx'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  return (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='shop'>SHOP</OptionLink>
      <OptionLink to='contact'>CONTACT</OptionLink>
      {
        currentUser ?
        <OptionLink as='div' onClick={ () => dispatch(signOutStart())}>SIGN OUT</OptionLink>
        :
        <OptionLink to='sigin'>SIGIN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {
        !hidden ?
        <CartDropdown/> :
        null
    }    
  </HeaderContainer>
)};

export default Header;