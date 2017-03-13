import React from 'react';
import Recipe from './Recipe.jsx';



export default class Accordion extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		let recipe = this.props.recipes.map(function(recipe, index) {
			return (
				<Recipe 
					recipe={recipe} 
					key={index} 
					index={index}
					onRemove={function() {this.props.onRemove(index)}.bind(this)}
					onEdit={function() {this.props.editRecipe(index)}.bind(this)}
				/>
			)
		}.bind(this))
		
		return (
			<div className="main">
				<div id="accordion" role="tablist" aria-multiselectable="true">
				  	{recipe}  
				</div>
			</div>
		)
	}
}


Accordion.propTypes = {
	recipes: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		ingredients: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
	})),
	editRecipe: React.PropTypes.func.isRequired,
	onRemove: React.PropTypes.func.isRequired
}





