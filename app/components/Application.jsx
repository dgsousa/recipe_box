import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as RecipeActionCreators from '../actions/recipes.jsx';
import Accordion from './Accordion.jsx';
import ModalContainer from './ModalContainer.jsx';



class Application extends Component{
	constructor(props) {
		super(props);
	}

	updateRecipe(recipe, index) {
		const recipes = this.state.recipes;
		recipes.splice(index, 1, recipe);
		this.setState({
			recipes: recipes,
			index: -1
		});
	}

	addRecipe(recipe) {
		const recipes = this.state.recipes;
		recipes.push(recipe);
		this.setState({
			recipes: recipes
		})
	}

	removeRecipe(index) {
		const recipes = this.state.recipes;
		recipes.splice(index, 1);
		this.setState({
			recipes: recipes
		})
	}

	setCurrentRecipe(index = -1) {
		const currentRecipe = index === -1 ? {name: '', ingredients: []} : this.state.recipes[index];
		this.setState({
			currentRecipe: currentRecipe,
			index: index
		})
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
					onClick={()=>{this.setCurrentRecipe()}}>
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

const mapStateToProps = (state) => (
	{
		recipes: state.recipes,
		currentRecipe: state.currentRecipe,
		index: state.index
	}
)

export default connect(mapStateToProps)(Application);





