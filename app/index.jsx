import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap-loader';
import './scss/application.scss';
import Application from './components/Application.jsx';
import Data from './data.json'


var data = function() {
	console.log('test1')
	if(localStorage._recipes) {
		return JSON.parse(localStorage._recipes);
	} else {
		console.log('test')
		return Data;
	}
}


ReactDOM.render(<Application data={data()}/>, document.getElementById('app'));