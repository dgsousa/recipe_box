import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap-loader';
import './scss/application.scss';
import Application from './components/Application.jsx';
import Data from './data.json'



ReactDOM.render(<Application data={JSON.parse(localStorage._recipes) || null}/>, document.getElementById('app'));