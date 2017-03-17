import React, {Component, PropTypes} from 'react';
import Recipe from './Recipe.jsx';



export default class Accordion extends Component{
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
	recipes: PropTypes.arrayOf(React.PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(React.PropTypes.string.isRequired)
	})),
	editRecipe: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired
}





