import React, { Component } from 'react';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            name: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    
    render() {
        return (
            <div className='sign-in'>
                <h2>Sign In</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input name='email' type='email' value={this.state.email} required onChange={this.handleChange} />

                    <label>Password:</label>
                    <input name='password' type='password' value={this.state.password} required onChange={this.handleChange} />
                    <input type='submit' />
                </form>
            </div>
        );
    }
}

export default SignIn;