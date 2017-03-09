import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {

  render() {

    if (this.props.selectedVideo == null || typeof this.props.selectedVideo == 'undefined') {
      return <div className="col-md-7">Loading...</div>;
    }

    const videoItem = this.props.selectedVideo

    return (
      <div className="col-md-7">
        <figure className="figure">
          <div className="figure-img img-fluid rounded embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoItem.id.videoId}`}></iframe>
          </div>
          <figcaption className="figure-caption text-left">
            <div>
              <h4>Title: {videoItem.snippet.title} </h4>
            </div>
            <div>
              <p>{videoItem.snippet.description}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedVideo: state.selectedVideo
  }
}

export default connect(mapStateToProps)(VideoDetail);
