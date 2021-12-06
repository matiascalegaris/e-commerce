import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component'
import { ShopPage } from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'

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
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/shop' element={<ShopPage/>} />
        <Route exact path='/sigin' element={<SignInAndSignup/>} />
      </Routes>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
