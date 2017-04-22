import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
// Route - defines a match between URL and a component

// Following line matches / with App
// slash means the first slash after .com or .net, etc.

const Greeting = () => {
  return (
	<div>
	Nigawazaa!
	</div>
  );
};

export default(
  <Route path="/" component={App}>
	<Route path="greet" component={Greeting} />
	<Route path="greet2" component={Greeting} />
	<Route path="greet3" component={Greeting} />
  </Route>
  );
