import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectVideo } from '../actions/index';

class VideoListItem extends Component {

  render() {
    const video = this.props.video;
    console.log("thumbnails", video.snippet.thumbnails);
    return (
      <li className='media' onClick={() => this.props.selectVideo(video)}>
        <img className='d-flex mr-3 align-self-center' src={video.snippet.thumbnails.default.url}/>
        <div className='media-body'>
          <h5 className='mt-0 mb-1'>
            {video.snippet.title}
          </h5>
        </div>
      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectVideo: selectVideo}, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoListItem);