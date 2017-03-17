import React from 'react';
import Ingredients from './Ingredients.jsx';


const Recipe = (props) => {
	return (
		<div className="card panel">
			<div className="card-header" role="tab" id="headingOne">
				<h5 className="mb-0">
				     <a data-toggle="collapse" 
	           			data-parent="#accordion" 
	           			href={"#collapse" + props.index} 
	           			aria-expanded="true" 
	           			aria-controls={"collapse" + props.index}>
	          			{props.recipe.name}
	        		</a>  
				</h5>
			</div>	
			<div id={"collapse" + props.index} className="collapse show" role="tabpanel" aria-labelledby="headingOne">
			    <div className="card-block">
			      	<div className="recipe-header">
			      		<h4>Ingredients</h4>
			      	</div>
			      	
			      	<Ingredients ingredients={props.recipe.ingredients}/>
			      	
			      	<div className="buttonDiv">
			      		<button 
							className="btn btn-danger" 
							onClick={props.onRemove}>
							Delete
						</button>
			      		<button className="btn btn-secondary" 
							onClick={props.onEdit} 
							data-toggle="modal" 
							data-target="#myModal">
							Edit
						</button>
			      	</div>
			    </div>
			</div>			    
		</div>
	)
}

Recipe.propTypes ={
	recipe: React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		ingredients: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
	}),
	index: React.PropTypes.number.isRequired,
	onRemove: React.PropTypes.func.isRequired,
	onEdit: React.PropTypes.func.isRequired
}

export default Recipe;




