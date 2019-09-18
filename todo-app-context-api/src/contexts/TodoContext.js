import React, { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {

  const initialTodos = [
    {
      id: 1,
      title: 'Create Something',
      description: 'Create Something description'
    },
    {
      id: 2,
      title: 'Create Something 2',
      description: 'Create Something 2 description'
    }
  ];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todoItems', [])
  }, [todos]);

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}
