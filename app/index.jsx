import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap-loader';
import './scss/application.scss';
import Application from './components/Application.jsx';



ReactDOM.render(<Application data={JSON.parse(localStorage._recipes  || "[]")}/>, document.getElementById('app'));

