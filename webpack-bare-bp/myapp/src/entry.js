import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Kefir from 'kefir';

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			text: "My Text"
		}
		
	}

	componentDidMount() {

		var cnt = 0;
		console.log('mounted');
		
		this.setState({
			text: "mounted"
		});

		var btnClicks = Kefir.fromEvents(document.querySelector('#myBtn1'), 'click');

		var clicksCount = btnClicks.scan(sum => sum + 1, 0);

		clicksCount.onValue( value => this.setState({text: value}))
	}

  render() {
    return (
    	<div>
		      <h1>{this.state.text}</h1>
		      <button id="myBtn1">click me</button>
      	</div>
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