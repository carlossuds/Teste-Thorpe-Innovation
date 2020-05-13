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

export const InputDiv = styled.div`
  display: flex;
`;

export const Btn = styled.button`
  display: flex;
  position: relative;
  left: -20px;
  background: none;
  border: none;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 580px;
  margin-top: 3%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 556px;
  margin-top: 2%;
`;

export const DeleteBtn = styled.button`
  display: flex;
  background: none;
  border: none;
  align-self: center;
`;
