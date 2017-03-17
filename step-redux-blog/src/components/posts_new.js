import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <div>
        <div className="text-xs-right">
          <Link to="/" className="btn btn-primary">Return to Post List</Link>
        </div>
        <form onSubmit={handleSubmit(this.props.createPost)}>
          <h3>Create A New Post</h3>
          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" {...title} />
            {/*<div className="text-help">{title.touched ? title.error : ''}</div>*/}
            <div className="text-help">{title.touched && title.error}</div>
          </div>
          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="title">Categories</label>
            <input type="text" className="form-control" {...categories} />
            <div className="text-help">{categories.touched && categories.error}</div>
          </div>
          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="title">Content</label>
            <textarea className="form-control"  {...content} />
            <div className="text-help">{content.touched && content.error}</div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title'
  }
  if (!values.categories) {
    errors.categories = 'Enter categories'
  }
  if (!values.content) {
    errors.content = 'Enter some content'
  }
  return errors;
}

// connect: mapstatetoprops, mapdispatchtoprops
// redux-form: formConfig, mapstatetoprops, mapdispatchtoprops

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

/*
state == {
  form: {
    PostsNewForm: {
      title: '',
      categories: '',
      content: ''
    }
  }
}
*/