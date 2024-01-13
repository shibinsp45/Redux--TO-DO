import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './todoSlice';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: newTodo }));
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Container className="mt-5 text-center">
      <h1 className="mb-4">TO-DO APP</h1>
      <Form className="mb-3">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </Form>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
            {todo.text}
            <Button variant="danger" onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default App;
