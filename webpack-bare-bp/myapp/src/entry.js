import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <h1>Hello, world!!!</h1>
    );
  }
}


ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
		</Route>
	</Router>
	), document.getElementById('root'));

let run = () => {
	document.write("It works!")
};

run();