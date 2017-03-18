import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { toggleTask, deleteTask } from '../actions/index';

class TaskCard extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    this.props.toggleTask(this.props.taskId, this.props.task)
  }

  handleDelete() {
    this.props.deleteTask(this.props.taskId)
  }

  render() {
    let completion;
    if (this.props.task.completed === true) {
      completion = <p><i className="fa fa-check" aria-hidden="true"></i>Completed</p>
    } else {
      completion = <p><i className="fa fa-times" aria-hidden="true"></i>Not Complete</p>
    }

    return (
      <div className="col-sm-3" onClick={this.handleClick}>
        <div className={`card ${this.props.task.completed && 'completed'}`}>
          <div className="card-block">
            <p>{this.props.task.name}</p>
            <p className="cross" onClick={this.handleDelete}><i className="fa fa-times"></i></p>
          </div>
          <div className="card-footer">
            {completion}
          </div>
        </div>
      </div>
    )
  }
}
TaskCard.propTypes = {
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

export default connect(null, { toggleTask, deleteTask })(TaskCard);