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
    signupConfirmPassword,
    name,
  } = form;

  function handleChange(event) {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  const signin = async (e) => {
    try {
      e.preventDefault();
      console.log(form);
      const res = await axios.post('/auth/signIn', {
        email: signinEmail,
        password: signinPassword,
      });
      console.log(res.data);
      localStorage.setItem('progressPalToken', res.data.token);
      updateAuth(Math.random());
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post('/auth/signUp', {
        name,
        email: signupEmail,
        password: signupPassword,
      });

      localStorage.setItem('progressPalToken', res.data.token);
      updateAuth(Math.random());
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
            name="signinPassword"
            value={signinPassword}
            handleChange={handleChange}
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
