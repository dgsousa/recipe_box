import React, {React, PropTypes} from 'react';
import Accordion from './Accordion.jsx';
import ModalContainer from './ModalContainer.jsx';



export default class Application extends Component{
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
		let recipes = this.state.recipes;
		recipes.splice(index, 1, recipe);
		this.setState({
			recipes: recipes,
			index: -1
		});
		localStorage._recipes = JSON.stringify(this.state.recipes);
	}

	addRecipe(recipe) {
		let recipes = this.state.recipes;
		recipes.push(recipe);
		this.setState({
			recipes: recipes
		})
		localStorage._recipes = JSON.stringify(this.state.recipes);
	}

	removeRecipe(index) {
		let recipes = this.state.recipes;
		recipes.splice(index, 1);
		this.setState({
			recipes: recipes
		})
		localStorage._recipes = JSON.stringify(this.state.recipes);
	}

	setCurrentRecipe(index) {
		let currentRecipe = this.state.recipes[index];
		this.setState({
			currentRecipe: currentRecipe,
			index: index
		})
	}

	resetCurrentRecipe() {
		let currentRecipe = {
			name: '',
			ingredients: []
		}
		this.setState({
			currentRecipe: currentRecipe,
			index: -1
		});
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
	data: PropTypes.arrayOf(React.PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(React.PropTypes.string.isRequired)
	}))
}








