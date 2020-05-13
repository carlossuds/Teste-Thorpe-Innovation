import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  min-width: 600px;
`;

export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 580px;
`;

export const ToSignUp = styled.span`
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #138a72;
  margin-top: 51px;
`;
