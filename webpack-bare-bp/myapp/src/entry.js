import React from 'react';
import ReactDOM from 'react-dom';

let Hello = () => <h1>Hello</h1>;

let run = () => {
	ReactDOM.render(<Hello />, document.getElementById('root'));
	document.write("It works!")
};


run();