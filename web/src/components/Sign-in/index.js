import React, { useState, useEffect } from 'react';

import './styles.scss';

import FormInput from '../Form-input';
import CustomButton from '../Custom-button';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {

    }, []);

    const handleSubmitForm = (event) => {
        event.preventDefault();

        setPassword('');
        setEmail('');
    }

    return (
        <div className="sign-in">
            <h2>I already have an account.</h2>
            <span>Sign in with your email and password.</span>

            <form onSubmit={handleSubmitForm}>
                
                <FormInput 
                    name='email' 
                    value={email} 
                    type="email" 
                    handleChange={event => setEmail(event.target.value)}
                    label='email'
                    required
                />
    
                <FormInput 
                    name='password' 
                    value={password} 
                    type="password"
                    handleChange={event => setPassword(event.target.value)}
                    label='password' 
                    required
                />
                

                <CustomButton type="submit">
                   Sign In
                </CustomButton>
            </form>
        </div>
    )
}

export default SignIn;