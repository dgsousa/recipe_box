import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setCurrentRecipe, changeModalState } from "../actions/recipes.jsx";


class AddRecipe extends Component {
	constructor(props) {
		super(props);
		this.setRecipe = this.setRecipe.bind(this);
	}
	
	setRecipe() {
		const { setCurrentRecipe, changeModalState } = this.props;
		setCurrentRecipe(-1);
		changeModalState(true);
	}

	render() {
		return (
			<button 
				className="btn btn-danger" 
				id="bottom-button"
				onClick={this.setRecipe}>
				Add A Recipe!
			</button>
		);
	}
}


export default connect(
	null, 
	{ setCurrentRecipe, changeModalState }
)(AddRecipe);


AddRecipe.propTypes = {
	setCurrentRecipe: PropTypes.func.isRequired,
	changeModalState: PropTypes.func.isRequired
};