import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseAction';

class ManageCoursePage extends Component {
  render() {
    return (
      <h1>Manage Course</h1>
    );
  }
}

ManageCoursePage.propTypes = {

};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    state: state
  };
}


export default ManageCoursePage;