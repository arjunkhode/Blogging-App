import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
			<div className="text-xs-right">
			<Link to="/posts/new" className="btn btn-primary">
				Add a post
			</Link>
			</div>
			Lists of blog posts
			</div>
			);
	}
}

export default connect(null, { fetchPosts })(PostsIndex);

// We use axios to make a network request and redux promise to unwrap the data
