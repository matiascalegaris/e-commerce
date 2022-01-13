import React, {useState} from "react";
import FormInput from "../form-input/form-imput.component";
import MenuButton from "../menu-button/menu-button.component";
import './sign-in.styles.scss'
import { connect } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

const SignIn = ({emailSignInStart, googleSignInStart}) => {

  const [userCredentials, setCredentials] = useState({email:'', password:''});
  const {email, password } = userCredentials;
  
  const handleSubmit = (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
    setCredentials({email:'', password:''});
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value});
  }

  return (
    <div className='sign-in'>
      <h2 className='title'>I alreade have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <FormInput name="email" type="email" label='Email' value={email} required handleChange={handleChange} />
        <FormInput name="password" type="´password" label='Password' value={password} required handleChange={handleChange} />
        <div className='buttons'>
          <MenuButton 
            type='button'
            value='Submit Form'
            onClick={handleSubmit} 
          > Sign in</MenuButton>
          <MenuButton 
            type='button' 
            onClick={googleSignInStart} 
            value='Submit Form' 
            isGoogleSignIn
          > Sign in With Google</MenuButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () =>  dispatch(googleSignInStart()),
  emailSignInStart : ( email, password ) => dispatch(emailSignInStart({ email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);