import React, { Component } from 'react';

class VideoListItem extends Component {

  render() {
    const videoSnippet = this.props.video.snippet;
    return (
      <li className='list-group-item'>
        <div className='video-list media'>
          <div className='media-left'>
            <img className='media-object' src={videoSnippet.thumbnails.default.url}/>
          </div>
        </div>
        <div className='media-body'>
          <div className='media-heading'>
            {videoSnippet.title}
          </div>
        </div>
      </li>
    )
  }
}

export default VideoListItem;