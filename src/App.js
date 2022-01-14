import React, {useEffect} from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { checkUserSession } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/checkout.component';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch  = useDispatch();
  
  useEffect( ()=> {
    dispatch(checkUserSession());
  }, [dispatch]);

  const redirect = () => {
    return currentUser ? 
          (<Navigate to='/'/>) : 
          (<SignInAndSignup/>)
  } 
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/shop/*' element={<ShopPage/>} />
        <Route path='/sigin' element={ redirect() } />
        <Route path='/checkout' element= {<Checkout/>} />
      </Routes>
    </div>
  );

}

export default App;
