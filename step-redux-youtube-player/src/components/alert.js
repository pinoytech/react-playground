import React, { Component } from 'react'

class Alert extends Component {
  render () {
    console.log("term", this.props.term);
    let hasSearched;
    if (this.props.term != '') {
      hasSearched = `You've searched the term: ${this.props.term}`;
    }
    return (
      <div className="alert alert-info" role="alert">
        {hasSearched}
      </div>
    )
  }
}

export default Alert;