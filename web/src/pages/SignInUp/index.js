import React from 'react';

import './styles.scss';

import SignIn from '../../components/Sign-in';
import SignUp from '../../components/Sign-up';

const SignInUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInUpPage;