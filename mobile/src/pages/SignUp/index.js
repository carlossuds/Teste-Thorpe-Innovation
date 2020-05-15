import React, {useRef} from 'react';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {Form} from '@unform/core';

import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, FormView, Duo, ToSignIn} from './styles';

import logo from '../../assets/todo_logo.png';

import {signInRequest} from '../../store/modules/auth/actions';

export default function SignUp({navigation}) {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  function handleSubmit({email, password}) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Image source={logo} x />

      <Content>
        <FormView>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Duo>
              <Label title="Name" />
              <Input
                name="name"
                returnKeyType="next"
                onSubmitEditing={() =>
                  formRef.current.getFieldRef('email').focus()
                }
              />
            </Duo>
            <Duo>
              <Label title="Email" />
              <Input
                name="email"
                autoCapitalize="none"
                keyboardType="email-address"
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
                returnKeyType="next"
                onSubmitEditing={() =>
                  formRef.current.getFieldRef('repeat').focus()
                }
              />
            </Duo>
            <Duo>
              <Label title="Repeat" />
              <Input
                name="repeat"
                secureTextEntry
                onSubmitEditing={() => formRef.current.submitForm()}
              />
            </Duo>
          </Form>
        </FormView>
      </Content>
      <ToSignIn onPress={() => navigation.navigate('SignIn')}>
        Aready registered? Sign in
      </ToSignIn>
      <Button title="Sign up" onPress={() => formRef.current.submitForm()} />
    </Container>
  );
}
