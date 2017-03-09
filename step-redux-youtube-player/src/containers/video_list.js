import React, { Component } from 'react'
import { connect } from 'react-redux';
import VideoListItem from '../containers/video_list_item';

class VideoList extends Component {

  renderVideoList(video) {
    return <VideoListItem key={video.id.videoId} video={video} />
  }

  render() {
    if (!this.props.videos || (typeof this.props.videos[0] == 'undefined')) {
      return <div className="col-md-5">Nothing to see here</div>
    }
    return (
      <div className="col-md-5">
        <ul className="list-unstyled">
          {this.props.videos[0].items.map((video) => this.renderVideoList(video))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { videos: state.videos }
}

export default connect(mapStateToProps)(VideoList);
