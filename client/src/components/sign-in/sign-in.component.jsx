import React, { useState } from 'react';

import  FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';


const SignIn = ({ googleSignInStart, emailSignInStart }) => { 
  const [userCredentials, setCredentials] = useState({emailUser: '', passwordUser: ''});
// el primer parametro es el estado osea email y password , el segundo es la funcion que va a cambiar o set the state

   const { emailUser, passwordUser } = userCredentials;

    const handleSubmit = async  (event) => {
        event.preventDefault();

        emailSignInStart(emailUser, passwordUser)

    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        
        setCredentials({...userCredentials,  [name]: value})
    };

    
        
        return (
            <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
    
            <form onSubmit={handleSubmit}>
            
              <FormInput
                name='emailUser'
                type='email'
                handleChange={handleChange}
                value={emailUser}
                label='email'
                required
              />
              <FormInput
                name='passwordUser'
                type='password'
                value={passwordUser}
                handleChange={handleChange}
                label='password'
                required
              />
              <ButtonsBarContainer>
                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton type = 'button' onClick={googleSignInStart} isGoogleSignIn>
                  Sign in with Google
                </CustomButton>
              </ButtonsBarContainer>

            </form>
          </SignInContainer>
            // isGoogleSignIn that is above is just a prop


        )
        
    };

const mapDispatchToProps  = ( dispatch ) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart:  (email, password) => dispatch(emailSignInStart( {email, password}))

})


export default connect(null, mapDispatchToProps)(SignIn);