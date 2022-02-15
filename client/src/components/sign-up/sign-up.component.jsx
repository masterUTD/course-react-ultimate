import React, { useState } from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { signUpStart} from '../../redux/user/user.actions'

import { SignUpContainer, SignUpTitle } from './sign-up.styles';



const SignUp = ({ signUpStart}) => {
 const [ userCredentials, setUserCredentials ] = useState({ displayName: '', email: '', password: '', confirmPassword: ''})

 const { displayName, email, password, confirmPassword } = userCredentials; 
 
   const  handleSubmit = async (event) => {
        event.preventDefault();
      
        if(password !== confirmPassword) {
            alert("Passwords don't match ")
            return;

        }

        signUpStart({displayName, email, password}) // aqui se despacha la accion de mapDispatchToProps cuando dan click

    };

    const handleChange = (event) => {
        const { name, value} = event.target; // event.target me va a apuntar solo el nombre del input y el valor

        setUserCredentials({...userCredentials,  [name]: value }); // aqui asignamos el valor al input correspondiente de forma dinamica

    }

   
        return (
            <SignUpContainer>
            <SignUpTitle>I do not have a account</SignUpTitle>
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
              <CustomButton type='submit' onClick={signUpStart}>SIGN UP</CustomButton> 
            </form>
          </SignUpContainer>


        )

    }
 // the signUpStart of the customButton is to start the action :dispatch

const mapDispatchToProps = ( dispatch ) => ({
  signUpStart: (userCredetials) => dispatch(signUpStart(userCredetials))

})

export default connect(null, mapDispatchToProps)(SignUp)