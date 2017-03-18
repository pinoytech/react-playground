import React, { Component } from 'react'
import { connect } from 'react-redux';
import TaskCard from './TaskCard';


class TaskCardList extends Component {

  renderTaskCardList(task, index) {
    return <TaskCard key={index} task={task} taskId={index}/>;
  }

  render() {
    if (this.props.tasks.length === 0) {
      return (
        <h5>
          <p>The task list is empty</p>
          <p>Add new task using the form above</p>
        </h5>
      )
    }

    return (
      <div className="row">
        {this.props.tasks.map((task, index) => this.renderTaskCardList(task, index))}
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks
  }
}
export default connect(mapStateToProps)(TaskCardList);