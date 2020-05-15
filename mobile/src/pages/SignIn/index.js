import React, {useRef} from 'react';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {Form} from '@unform/core';

import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, FormView, ToSignUp} from './styles';

import logo from '../../assets/todo_logo.png';

import {signInRequest} from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  function handleSubmit({email, password}) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Image source={logo} />

      <FormView>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Label title="Email" />
          <Input name="email" type="email" />
          <Label title="Password" />
          <Input name="password" type="password" />

          <ToSignUp onPress={() => {}}>Not registered? Sign up</ToSignUp>
        </Form>
      </FormView>
      <Button title="Sign in" onPress={() => formRef.current.submitForm()} />
    </Container>
  );
}
