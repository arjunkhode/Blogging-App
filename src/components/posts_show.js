import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
	render() {
		return <div>Show post {this.props.params.id}</div>;
	}
}

export default PostsShow;
