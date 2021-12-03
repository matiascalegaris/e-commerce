import React from "react";
import './sign-up.styles.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import FormInput from "../form-input/form-imput.component";
import MenuButton from "../menu-button/menu-button.component";

class SignUp extends React.Component {

  constructor() {
    super()
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(error) {
      alert("failed to create user");
      console.log(error);
    }
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput 
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput 
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput 
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <MenuButton type='submit'>Sign Up</MenuButton>
        </form>
      </div>
    );
  }
}

export default SignUp;