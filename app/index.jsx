import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import RecipeReducer from "./reducers/recipes.jsx";
import "bootstrap-loader";
import "./scss/application.scss";
import Application from "./components/Application.jsx";


const initialData = JSON.stringify({
	recipes: [],
	currentRecipe: {
		name: "",
		ingredients: []
	},
	index: -1
});


const store = createStore(RecipeReducer, JSON.parse(localStorage._data || initialData));



ReactDOM.render(
	<Provider store={store}>
		<Application/>
	</Provider>, 
	document.getElementById("app")
);

