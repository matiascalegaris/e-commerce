import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component'
import { ShopPage } from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/checkout.component';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        });
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  } 

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  const redirect = () => {
    return this.props.currentUser ? 
          (<Navigate to='/'/>) : 
          (<SignInAndSignup/>)
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route exact path='/sigin' element={ redirect() } />
        <Route exact path='/checkout' element= {<Checkout/>} />
      </Routes>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
