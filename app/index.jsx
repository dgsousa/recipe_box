import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import RecipeReducer from "./app/reducers/recipes.jsx";
import 'bootstrap-loader';
import './scss/application.scss';
import Application from './components/Application.jsx';


const initialData = {
	recipes: [],
	currentRecipe: {
		name: '',
		ingredients: []
	},
	index: -1
}

const store = createStore(RecipeReducer, initialData)

ReactDOM.render(
	<Provider store={store}>
		<Application/>
	</Provider>, 
	document.getElementById('app')
);

