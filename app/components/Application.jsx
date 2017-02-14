import React from 'react';
import Accordion from './Accordion.jsx';
import ModalContainer from './ModalContainer.jsx';



export default class Application extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			recipes: this.props.data,
			currentRecipe: {
				name: '',
				ingredients: []
			},
			index: -1
		}
	}

	updateRecipe(recipe, index) {
		var newRecipe = {
			name: recipe.name,
			ingredients: recipe.ingredients
		}
		this.state.recipes.splice(index, 1, newRecipe);
		this.state.index = -1;
		localStorage._recipes = JSON.stringify(this.state.recipes);
		this.setState(this.state);
	}

	addRecipe(recipe) {
		var newRecipe = {
			name: recipe.name,
			ingredients: recipe.ingredients
		}
		this.state.recipes.push(newRecipe);
		localStorage._recipes = JSON.stringify(this.state.recipes);
		this.setState(this.state);
	}

	removeRecipe(index) {
		this.state.recipes.splice(index, 1);
		localStorage._recipes = JSON.stringify(this.state.recipes);
		this.setState(this.state);
	}

	setCurrentRecipe(index) {
		this.state.currentRecipe = {
			name: this.state.recipes[index].name,
			ingredients: this.state.recipes[index].ingredients
		}
		this.state.index = index;
		this.setState(this.state);
	}

	resetCurrentRecipe() {
		this.state.currentRecipe = {
			name: '',
			ingredients: []
		};
		this.state.index = -1;
		this.setState(this.state);
	}

	render() {
		return (
			<div>
				<Accordion 
					recipes={this.state.recipes}
					editRecipe={this.setCurrentRecipe.bind(this)}
					onRemove={this.removeRecipe.bind(this)}/>
				
				<button 
					className="btn btn-danger" 
					id="bottom-button"
					data-toggle="modal" 
					data-target="#myModal"
					onClick={this.resetCurrentRecipe.bind(this)}>
					Add A Recipe!
				</button>
	
				<ModalContainer 
					currentRecipe={this.state.currentRecipe} 
					index={this.state.index} 
					add={this.addRecipe.bind(this)}
					update={this.updateRecipe.bind(this)}/>		
					
			</div>		
			
		)
	}
}

Application.propTypes = {
	data: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		ingredients: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
	}))
}








