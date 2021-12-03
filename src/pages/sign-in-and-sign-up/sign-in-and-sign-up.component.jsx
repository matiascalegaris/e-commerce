import React from "react";
import SignIn from "../../components/sign-in/sign-in.componen";
import SignUp from "../../components/sign-up/sign-up.component";
import './sign-in-and-sign-up.styles.scss'

class SignInAndSignup extends React.Component {
  
  render() {
    return (
      <div className='sign-in-and-sign-up'>
      <SignIn/>
      <SignUp/>
      </div>
    )
  }
}

export default SignInAndSignup;