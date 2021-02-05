import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Axios } from '../../providers/axios';
import FormWrapper from '../UI/form-wrapper';
import Input from '../UI/input';
import Submit from '../UI/submit';

import { onShowSignIn } from '../../redux/forms/forms.actions';
import { registerStart } from '../../redux/auth/auth.actions';

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

const SignUp = ({ onShowSignIn, registerStart }) => {
  const [creds, setCreds] = useState({
    name: '',
    email: '',
    password: '',
    password_confirm: '',
  });
  const { name, email, password, password_confirm } = creds;

  const onChange = (e) => {
    const { value, name } = e.target;
    setCreds((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCreds((prevState) => ({
      ...prevState,
      password: '',
      password_confirm: '',
    }));
    registerStart(creds);
  };

  return (
    <FormWrapper>
      <Title>Sign In</Title>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input
          name='name'
          type='text'
          value={name}
          placeholder='Name'
          onChange={(e) => onChange(e)}
        />
        <Input
          name='email'
          type='email'
          value={email}
          placeholder='Email'
          onChange={(e) => onChange(e)}
        />
        <Input
          name='password'
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => onChange(e)}
        />
        <Input
          name='password_confirm'
          type='password'
          value={password_confirm}
          placeholder='Confirm password'
          onChange={(e) => onChange(e)}
        />

        <Submit type='submit' value='Sign Up' />
      </form>

      <Message onClick={onShowSignIn}>
        Already have account? <span>Sign In</span>
      </Message>
    </FormWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onShowSignIn: () => dispatch(onShowSignIn()),
  registerStart: (creds) => dispatch(registerStart(creds)),
});

export default connect(null, mapDispatchToProps)(SignUp);
