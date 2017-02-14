import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap-loader';
import './scss/application.scss';
import Application from './components/Application.jsx';
import Data from './data.json';

var data = function() {
	if(localStorage._recipes) {
		return JSON.parse(localStorage._recipes)
	} else {
		return Data.recipes
	}
}

ReactDOM.render(<Application data={data()}/>, document.getElementById('app'));

