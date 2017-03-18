import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../actions/index';

class AddTaskForm extends Component {

  constructor() {
    super();
    this.state = {
      task: '',
      tasks: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state.task)
  }

  handleInputChange(e) {
    this.setState({
      task: e.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="content-field" className="sr-only"></label>
              <input id="content-field" className="form-control" onChange={this.handleInputChange} value={this.state.task} placeholder="Enter a Task" name="content" />
              <button type="submit" className="btn btn-primary"><i className="fa fa-plus"></i> Add Task</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

AddTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
}


export default connect(null, { addTask })(AddTaskForm);