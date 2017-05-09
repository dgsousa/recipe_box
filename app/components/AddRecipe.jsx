import React, {PropTypes} from "react";
import { connect } from "react-redux";
import { setCurrentRecipe } from "../actions/recipes.jsx";


const AddRecipe = ({setCurrentRecipe}) => (

	<button 
		className="btn btn-danger" 
		id="bottom-button"
		data-toggle="modal" 
		data-target="#myModal"
		onClick={() => {setCurrentRecipe(-1);}}>
		Add A Recipe!
	</button>

);

const mapStateToProps = () => ({});



AddRecipe.propTypes = {
	setCurrentRecipe: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps, 
	{setCurrentRecipe: setCurrentRecipe}
)(AddRecipe);