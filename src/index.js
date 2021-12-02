import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp} from 'firebase/app'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeW0zK3PEOzrRkFF-pPksuJAvfMxWr_PI",
  authDomain: "ecomerce-dc319.firebaseapp.com",
  projectId: "ecomerce-dc319",
  storageBucket: "ecomerce-dc319.appspot.com",
  messagingSenderId: "442587894121",
  appId: "1:442587894121:web:875f0b43048949676c6df8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
