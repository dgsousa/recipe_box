import React, {PropTypes} from "react";
import Ingredients from "./Ingredients.jsx";
import { connect } from "react-redux";
import { removeRecipe, setCurrentRecipe } from "../actions/recipes.jsx";


const Recipe = ({index, recipe, removeRecipe, setCurrentRecipe}) => {
	return (
		<div className="main">
			<div id="accordion" role="tablist" aria-multiselectable="true">
				<div className="card panel">
					<div className="card-header" role="tab" id="headingOne">
						<h5 className="mb-0">
							<a data-toggle="collapse" 
								data-parent="#accordion" 
								href={"#collapse" + index} 
								aria-expanded="true" 
								aria-controls={"collapse" + index}>
								{recipe.name}
							</a>  
						</h5>
					</div>	
					<div id={"collapse" + index} className="collapse show" role="tabpanel" aria-labelledby="headingOne">
						<div className="card-block">
							<div className="recipe-header">
								<h4>Ingredients</h4>
							</div>
								<Ingredients ingredients={recipe.ingredients}/>
							<div className="buttonDiv">
								<button 
									className="btn btn-danger" 
									onClick={() => {removeRecipe(index);}}>
									Delete
								</button>
								<button className="btn btn-secondary" 
									onClick={() => {setCurrentRecipe(index);}} 
									data-toggle="modal" 
									data-target="#myModal">
									Edit
								</button>
							</div>
						</div>
					</div>			    
				</div>
			</div>
		</div>
	);
};

Recipe.propTypes ={
	recipe: PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(React.PropTypes.string.isRequired)
	}),
	index: PropTypes.number.isRequired,
	removeRecipe: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
	index: ownProps.index,
	recipe: state.recipes[ownProps.index]
});

export default connect(
	mapStateToProps, 
	{
		removeRecipe: removeRecipe,
		setCurrentRecipe: setCurrentRecipe
	}
)(Recipe);




