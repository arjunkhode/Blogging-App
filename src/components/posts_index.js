import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>Lists of blog posts</div>
			);
	}
}

export default connect(null, { fetchPosts })(PostsIndex);

// We use axios to make a network request and redux promise to unwrap the data
