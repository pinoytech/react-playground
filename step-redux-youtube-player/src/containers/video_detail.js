import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {
  render() {
    if (typeof this.props.videos[0] == 'undefined') {
      return <div>Loading...</div>;
    }

    const videoItem = this.props.videos[0].items[0]

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoItem.id.videoId}`}></iframe>
        </div>
        <div className="details">
          <div>Title
          </div>
          <div>
            Description
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { videos: state.videos }
}

export default connect(mapStateToProps)(VideoDetail);