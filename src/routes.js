import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
// Route - defines a match between URL and a component

// Following line matches / with App
// slash means the first slash after .com or .net, etc.

import PostsIndex from './components/posts_index';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>
  );
