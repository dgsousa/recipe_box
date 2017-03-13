import React from 'react';
import Recipe from './Recipe.jsx';



export default class Accordion extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		let recipe = this.props.recipes.map((recipe, index)=> {
			return (
				<Recipe 
					recipe={recipe} 
					key={index} 
					index={index}
					onRemove={()=> {this.props.onRemove(index)}}
					onEdit={()=> {this.props.editRecipe(index)}}
				/>
			)
		})
		
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





