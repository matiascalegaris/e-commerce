import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import { ShopPage } from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/shop' element={<ShopPage/>} />
        <Route exact path='/sigin' element={<SignInAndSignup/>} />
      </Routes>
    </div>
  );
}

export default App;
