import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as RecipeActionCreators from "../actions/recipes.jsx";
import Recipe from "./Recipe.jsx";
import ModalContainer from "./ModalContainer.jsx";



class Application extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		localStorage._data = JSON.stringify(this.props);
		const {dispatch, recipes, currentRecipe, index} = this.props;
		const addRecipe = bindActionCreators(RecipeActionCreators.addRecipe, dispatch);
		const updateRecipe = bindActionCreators(RecipeActionCreators.updateRecipe, dispatch);
		const removeRecipe = bindActionCreators(RecipeActionCreators.removeRecipe, dispatch);
		const setCurrentRecipe = bindActionCreators(RecipeActionCreators.setCurrentRecipe, dispatch);

		const recipe = recipes.map((recipe, index)=> {
			return (
				<Recipe 
					recipe={recipe} 
					key={index} 
					index={index}
					onRemove={()=> {removeRecipe(index);}}
					onEdit={()=> {setCurrentRecipe(index);}}
				/>
			);
		});

		return (
			<div>
				<div className="main">
					<div id="accordion" role="tablist" aria-multiselectable="true">
						{recipe}  
					</div>
				</div>
				
				<button 
					className="btn btn-danger" 
					id="bottom-button"
					data-toggle="modal" 
					data-target="#myModal"
					onClick={()=>{setCurrentRecipe();}}>
					Add A Recipe!
				</button>
	
				<ModalContainer 
					currentRecipe={currentRecipe} 
					index={index} 
					add={addRecipe}
					update={updateRecipe}/>		
			</div>		
			
		);
	}
}



Application.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
	})).isRequired,
	currentRecipe: PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(React.PropTypes.string.isRequired)
	}),
	index: PropTypes.number.isRequired
};




const mapStateToProps = (state) => ({
	recipes: state.recipes,
	currentRecipe: state.currentRecipe,
	index: state.index
});

export default connect(mapStateToProps)(Application);





