import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Axios } from '../../providers/axios';
import FormWrapper from '../UI/form-wrapper';
import Input from '../UI/input';
import Submit from '../UI/submit';

import { onShowSignUp } from '../../redux/forms/forms.actions';
import { loginStart } from '../../redux/auth/auth.actions';

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const Message = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  span {
    color: green;
    cursor: pointer;
  }
`;

const SignIn = ({ onShowSignUp, loginStart }) => {
  const [creds, setCreds] = useState({ email: '', password: '' });
  console.log(creds);

  const onChange = (e) => {
    const { value, name } = e.target;
    setCreds((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setCreds((prevState) => ({
      email: prevState.email,
      password: '',
    }));
    loginStart(creds);
  };

  return (
    <FormWrapper>
      <Title>Sign In</Title>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input
          name='email'
          type='email'
          value={creds.email}
          placeholder='Email'
          onChange={(e) => onChange(e)}
        />
        <Input
          name='password'
          type='password'
          value={creds.password}
          placeholder='Password'
          onChange={(e) => onChange(e)}
        />
        <Submit type='submit' value='Log In' />
      </form>

      <Message onClick={onShowSignUp}>
        Don't Have account? <span>Sign Up</span>
      </Message>
    </FormWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onShowSignUp: () => dispatch(onShowSignUp()),
  loginStart: (creds) => dispatch(loginStart(creds)),
});

export default connect(null, mapDispatchToProps)(SignIn);
