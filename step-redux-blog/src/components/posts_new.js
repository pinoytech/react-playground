import React, { Component } from 'react'
import { Link } from 'react-router';

class PostsNew extends Component {
  render () {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/" className="btn btn-primary">Return to Post List</Link>
        </div>
        New Post
      </div>
    )
  }
}

export default PostsNew;