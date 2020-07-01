import React, { useState, useEffect } from 'react';

import './styles.scss';

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
                <input 
                    name='email' 
                    value={email} 
                    type="email" 
                    onChange={event => setEmail(event.target.value)}
                    required
                />
                <label htmlFor="email">Email</label>
                <input 
                    name='password' 
                    value={password} 
                    type="password"
                    onChange={event => setPassword(event.target.value)} 
                    required
                />
                <label htmlFor="password">Password</label>

                <input type="submit" value="Submit Form"/>
            </form>
        </div>
    )
}

export default SignIn;