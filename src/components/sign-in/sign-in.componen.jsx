import React from "react";
import FormInput from "../form-input/form-imput.component";
import MenuButton from "../menu-button/menu-button.component";
import './sign-in.styles.scss'
import { connect } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {email, password } = this.state;
    const { emailSignInStart } = this.props;
    
    emailSignInStart(email, password);
    this.setState({email:'', password:''});
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value});
  }

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2 className='title'>I alreade have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput name="email" type="email" label='Email' value={this.state.email} required handleChange={this.handleChange} />
          <FormInput name="password" type="´password" label='Password' value={this.state.password} required handleChange={this.handleChange} />
          <div className='buttons'>
            <MenuButton 
              type='button'
              value='Submit Form'
              onClick={this.handleSubmit} 
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () =>  dispatch(googleSignInStart()),
  emailSignInStart : ( email, password ) => dispatch(emailSignInStart({ email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);