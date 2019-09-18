import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Todo from './Todo';

const TodoList = ({ match }) => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.map(todo => {
        return <Todo todo={todo} key={todo.id}/>
      })}
    </>
  )
}

export default TodoList;
