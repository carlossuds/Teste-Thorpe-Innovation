import React, { useState, useEffect } from 'react';

import { MdSend, MdClose } from 'react-icons/md';

import Label from '../../components/Label';
import Input from '../../components/Input';
import api from '../../services/api';
import {
  Container,
  MyForm,
  InputDiv,
  Btn,
  List,
  Item,
  DeleteBtn,
} from './styles';
import logo from '../../assets/todo_logo.png';

export default function Main() {
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function loadTodos() {
      const response = await api.get('/todos');

      setTodos(response.data);
    }
    loadTodos();
  }, [refresh]);

  async function handleSubmit({ title }) {
    try {
      await api.post('/todos', { title: title });
      document.getElementById('title').value = '';
      setRefresh(!refresh);
    } catch (err) {}
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/todos/${id}`);
      setRefresh(!refresh);
    } catch (err) {}
  }

  return (
    <Container>
      <img src={logo} alt="To Do" />

      <MyForm onSubmit={handleSubmit}>
        <Label title="What do you have to do?" />

        <InputDiv>
          <Input id="title" name="title" type="text" />
          <Btn type="submit">
            <MdSend size={24} color="#138a72" />
          </Btn>
        </InputDiv>
      </MyForm>
      <List>
        {todos.map(todo => (
          <Item
            key={todo._id}
            style={{
              borderBottom: '1px solid #138a72',
            }}
          >
            <Label title={todo.title} />
            <DeleteBtn type="button" onClick={() => handleDelete(todo._id)}>
              <MdClose size={28} color="#138a72" />
            </DeleteBtn>
          </Item>
        ))}
      </List>
    </Container>
  );
}
