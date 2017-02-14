import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap-loader';
import './scss/application.scss';
import Application from './components/Application.jsx';
import Data from './data.json'


var data = function() {
	if(localStorage._recipes) {
		return localStorage._recipes
	} else {
		return '';
	}
}


ReactDOM.render(<Application data={JSON.parse(localStorage._recipes)}/>, document.getElementById('app'));