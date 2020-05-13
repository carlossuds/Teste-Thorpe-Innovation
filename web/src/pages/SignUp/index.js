import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, MyForm, ToSignUp } from './styles';

import logo from '../../assets/todo_logo.png';

import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password, repeat }) {
    dispatch(signUpRequest(name, email, password, repeat));
  }

  return (
    <Container>
      <img src={logo} alt="To Do" />

      <MyForm onSubmit={handleSubmit}>
        <Label title="Name" />
        <Input name="name" type="name" />
        <Label title="Email" />
        <Input name="email" type="email" />
        <Label title="Password" />
        <Input name="password" type="password" />
        <Label title="Repeat" />
        <Input name="repeat" type="password" />

        <Link to="/">
          <ToSignUp>Already registered? Sign in</ToSignUp>
        </Link>

        <Button title="Sign up" type="submit" />
      </MyForm>
    </Container>
  );
}
