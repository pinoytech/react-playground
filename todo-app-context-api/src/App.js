import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <h2>Todo List</h2>
        <div className="col-md-12">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
