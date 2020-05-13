import React from 'react';
import { Link } from 'react-router-dom';

import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Form, ToSignUp } from './styles';
import logo from '../../assets/todo_logo.png';

export default function Main() {
  return (
    <Container>
      <img src={logo} alt="To Do" />
    </Container>
  );
}
