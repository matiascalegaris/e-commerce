import React from "react";
import FormInput from "../form-input/form-imput.component";
import MenuButton from "../menu-button/menu-button.component";
import './sign-in.styles.scss'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.state( {email: '', password:''});
    } catch(error) {
      console.log(error);
    }

    this.setState({email:'', password:''});
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value});
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I alreade have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" label='Email' value={this.state.email} required handleChange={this.handleChange} />
          <FormInput name="password" type="´password" label='Password' value={this.state.password} required handleChange={this.handleChange} />
          <div className='buttons'>
            <MenuButton type='submit' value='Submit Form'> Sign in</MenuButton>
            <MenuButton onClick={signInWithGoogle} type='button' value='Submit Form' isGoogleSignIn> Sign in With Google</MenuButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;