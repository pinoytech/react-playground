import React, { Component } from 'react'

class Alert extends Component {
  render () {
    let hasSearched;
    if (this.props.term != '') {
      hasSearched = <div className="alert alert-info col-md-12" role="alert">{`You've searched the term: ${this.props.term}`}</div>;
    }
    return (
      <div>
        {hasSearched}
      </div>
    )
  }
}

export default Alert;