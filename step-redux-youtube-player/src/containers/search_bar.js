import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/index';
import Alert from '../components/alert';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      term: '',
      selectedVideo: '',
      videos: []
    });

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchVideos(this.state.term);
  }

  render() {
    return (
      <div className="row search_bar no-gutters">
        <div className="col-md-12">
          <form onSubmit={this.onFormSubmit} className="input-group input-group-lg">
            <input className='form-control' value={this.state.term} onChange={this.handleInputChange} />
            <span className='input-group-btn'>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </span>
          </form>
        </div>
        <Alert term={this.props.term}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    term: state.term
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);