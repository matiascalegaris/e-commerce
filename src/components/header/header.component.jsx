import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles.jsx'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from 'reselect';

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='shop'>SHOP</OptionLink>
      <OptionLink to='contact'>CONTACT</OptionLink>
      {
        currentUser ?
        <OptionLink as='div' onClick={ () => auth.signOut()}>SIGN OUT</OptionLink>
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
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);