import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { removeRecipe, setCurrentRecipe, changeModalState } from "../actions/recipes.jsx";


class Recipe extends Component {
	constructor(props) {
		super(props);
		this.removeThisRecipe = this.removeThisRecipe.bind(this);
		this.setRecipeToCurrent = this.setRecipeToCurrent.bind(this);
	}
	
	removeThisRecipe() {
		const { removeRecipe, index } = this.props;
		removeRecipe(index);
	}

	setRecipeToCurrent() {
		const { setCurrentRecipe, changeModalState, index } = this.props;
		setCurrentRecipe(index);
		changeModalState(true);
	}

	render() {
		const { recipe } = this.props;
		const ingredients = recipe.ingredients.map((ingredient, index) => <li className="list-group-item" key={index}>{ingredient}</li>);
		return (
			<div>	
				<div className="recipe-header">
					<h3>Ingredients</h3>
				</div>
					<div className="recipe-list">
						<ul className="list-group">
							{ ingredients }
						</ul>
					</div>
				<div className="buttonDiv">
					<button 
						className="btn btn-danger" 
						onClick={ this.removeThisRecipe }
					>
						Delete
					</button>
					<button 
						className="btn btn-primary" 
						onClick={ this.setRecipeToCurrent } 
					>
						Edit
					</button>
				</div>			    
			</div>
		);
	}
}



const mapStateToProps = (state, ownProps) => ({
	index: ownProps.index,
	recipe: state.recipes[ownProps.index]
});

export default connect(
	mapStateToProps, 
	{ removeRecipe, setCurrentRecipe, changeModalState }
)(Recipe);


Recipe.propTypes ={
	recipe: PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(React.PropTypes.string.isRequired)
	}),
	index: PropTypes.number.isRequired,
	removeRecipe: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	changeModalState: PropTypes.func.isRequired
};




