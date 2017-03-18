import React, { Component } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskCardList from './components/TaskCardList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AddTaskForm />
        <TaskCardList />
      </div>
    );
  }
}

export default App;
