import React, {Component}from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <h1>Hello, world!!!</h1>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

let run = () => {
	document.write("It works!")
};

run();