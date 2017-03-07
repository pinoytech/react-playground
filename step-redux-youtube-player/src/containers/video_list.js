import React, { Component } from 'react'
import { connect } from 'react-redux';
import VideoListItem from '../components/video_list_item';

class VideoList extends Component {
  renderVideoList(video) {
    return <VideoListItem key={video.id.videoId} video={video} />
  }
  render() {
    if (!this.props.videos || (typeof this.props.videos[0] == 'undefined')) {
      return <div>Nothing to see here</div>
    }
    return (
      <ul className="col-md-4 list-group">
        {this.props.videos[0].items.map((video) => this.renderVideoList(video))}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return { videos: state.videos }
}

export default connect(mapStateToProps)(VideoList);