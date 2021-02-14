import React, { useState } from 'react';
import axios from 'axios';

import FormInputCustom from './form-input-custom';
import ButtonCustom from './button-custom';

import './AuthPage.scss';

const LoginPage = ({ updateAuth }) => {
  const [form, setForm] = useState({});

  const {
    signinEmail,
    signupEmail,
    signinPassword,
    signupPassword,
    signinConfirmPassword,
    signupConfirmPassword,
    name,
  } = form;

  function handleChange(event) {
    const { value, name } = event.target;

    setForm({
      [name]: value,
    });
  }

  const signin = async () => {
    try {
      const res = await axios.post('/auth/signIn', {
        signinEmail,
        signinPassword,
      });

      console.log(signinPassword);

      localStorage.setItem('progressPalToken', res.data);
      updateAuth(1);
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async () => {
    try {
      const res = await axios.post('/auth/signUp', {
        name,
        signupEmail,
        signupPassword,
      });

      localStorage.setItem('progressPalToken', res.data);
      updateAuth(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-page">
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={signup}>
          <FormInputCustom
            type="text"
            name="signupEmail"
            value={signupEmail}
            handleChange={handleChange}
            required
            label="E-mail"
          />
          <FormInputCustom
            type="password"
            name="signupPassword"
            value={signupPassword}
            handleChange={handleChange}
            required
            label="Password"
          />
          <FormInputCustom
            type="password"
            name="signupConfirmPassword"
            value={signupConfirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <ButtonCustom type="submit">Sign up</ButtonCustom>
        </form>
      </div>

      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email</span>

        <form onSubmit={signin}>
          <FormInputCustom
            type="text"
            name="signinEmail"
            value={signinEmail}
            handleChange={handleChange}
            required
            label="E-mail"
          />
          <FormInputCustom
            type="password"
            name="password"
            value={signinPassword}
            handleChange={signinConfirmPassword}
            required
            label="Password"
          />
          <ButtonCustom type="submit">Sign in</ButtonCustom>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
