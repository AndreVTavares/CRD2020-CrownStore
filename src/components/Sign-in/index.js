import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import FormInput from '../Form-input';
import CustomButton from '../Custom-button';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ googleSignInStart,  emailSignInStart }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password)
  };

  return (
    <div className="sign-in">
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmitForm}>
        <FormInput
          name="email"
          value={email}
          type="email"
          handleChange={(event) => setEmail(event.target.value)}
          label="email"
          required
        />

        <FormInput
          name="password"
          value={password}
          type="password"
          handleChange={(event) => setPassword(event.target.value)}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>

          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),

});

export default connect(null, mapDispatchToProps)(SignIn);
