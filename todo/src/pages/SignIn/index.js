import React, {useRef} from 'react';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {Form} from '@unform/core';

import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, FormView, Duo, ToSignUp} from './styles';

import logo from '../../assets/todo_logo.png';

import {signInRequest} from '../../store/modules/auth/actions';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  function handleSubmit({email, password}) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Image source={logo} resizeMode="contain" style={{width: 140}} />

      <FormView>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Duo>
            <Label title="Email" />
            <Input
              name="email"
              returnKeyType="next"
              onSubmitEditing={() =>
                formRef.current.getFieldRef('password').focus()
              }
            />
          </Duo>
          <Duo>
            <Label title="Password" />
            <Input
              name="password"
              secureTextEntry
              onSubmitEditing={() => formRef.current.submitForm()}
            />
          </Duo>
          <ToSignUp onPress={() => navigation.navigate('SignUp')}>
            Not registered? Sign up
          </ToSignUp>
        </Form>
      </FormView>
      <Button title="Sign in" onPress={() => formRef.current.submitForm()} />
    </Container>
  );
}
