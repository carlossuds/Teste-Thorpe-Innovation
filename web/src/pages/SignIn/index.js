import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, MyForm, ToSignUp } from './styles';

import logo from '../../assets/todo_logo.png';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="To Do" />

      <MyForm onSubmit={handleSubmit}>
        <Label title="Email" />
        <Input name="email" type="email" />
        <Label title="Password" />
        <Input name="password" type="password" />

        <Link to="/signup">
          <ToSignUp>Not registered? Sign up</ToSignUp>
        </Link>

        <Button title="Sign in" type="submit" />
      </MyForm>
    </Container>
  );
}
