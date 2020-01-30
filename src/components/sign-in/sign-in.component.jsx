import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';

class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    
    render() {
        return (
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='Email'
                        value={this.state.email} 
                        required 
                        handleChange={this.handleChange} />
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password'
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange} />
                        <ButtonsContainer>
                            <CustomButton type='submit'> Sign In </CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                        </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;