import React, {useState} from "react";
import './sign-up.styles.scss'
import FormInput from "../form-input/form-imput.component";
import MenuButton from "../menu-button/menu-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";

const SignUp = () => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const dispatch = useDispatch();
  const {displayName, email, password, confirmPassword} = userCredentials;
  const handleChange = event => {
    const {name, value} = event.target;
    setUserCredentials({ ...userCredentials,[name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    dispatch(signUpStart( {displayName, email, password}));
  }

 
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput 
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput 
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <MenuButton type='button' onClick={handleSubmit}>Sign Up</MenuButton>
      </form>
    </div>
  );
}

export default SignUp;