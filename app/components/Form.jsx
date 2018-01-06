import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";

import { addRecipe, updateRecipe, changeModalState } from "../actions/recipes.jsx";


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			nameValidation: "",
			ingredients: [],
			ingredientValidation: ""
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleIngredientChange = this.handleIngredientChange.bind(this);
		this.submitRecipe = this.submitRecipe.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(this.state.showModal !== nextProps.showModal) {
			this.setState({
				name: nextProps.currentRecipe.name,
				ingredients: nextProps.currentRecipe.ingredients,
				showModal: nextProps.showModal
			});
		}
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value,
			nameValidation: ""
		});
	}

	handleIngredientChange(e) {
		this.setState({
			ingredients: e.target.value.split(","),
			ingredientValidation: ""
		});
	}

	submitRecipe() {
		const { name, ingredients } = this.state;
		const { current, addRecipe, updateRecipe, changeModalState } = this.props;
		if(!name || !ingredients[0]) {
			!name && this.setState({nameValidation: "Recipe must have a name."});
			!ingredients[0] && this.setState({ingredientValidation: "Recipe must have ingredients."});
		} else {
			current === -1 ? addRecipe(name, ingredients) : updateRecipe(name, ingredients);
			changeModalState(false);
		}
	}

	closeModal() {
		const { changeModalState } = this.props;
		changeModalState(false);
	}


	render() {
		const { name, ingredients, nameValidation, ingredientValidation } = this.state;
		const { current, showModal } = this.props;
		return (	
			<Modal show={showModal}>
				<Modal.Header>
					<h3>{current === -1 ? "Add a ": "Update "}Recipe</h3>
					<button className="close-button" onClick={this.closeModal}>
						<span>&times;</span>
					</button>
				</Modal.Header>
				<Modal.Body>
					<form>
					<div className="name-div">
						<label htmlFor="recipe-name">Name: </label>
						<input 
							type="text" 
							value={ name }
							onChange={ this.handleNameChange }
							name="name"
						/>
						<span className="validation">{ nameValidation }</span>
					</div>
					<div className="ingredients-div">
						<label htmlFor="indgredients">Ingredients: </label>
						<input
							type="textarea" 
							value={ ingredients }
							onChange={ this.handleIngredientChange }
							name="ingredients"
						/>
						<span className="validation">{ ingredientValidation }</span>
					</div>
					</form>
				</Modal.Body> 
				<Modal.Footer>
					<button className="btn btn-danger" onClick={ this.submitRecipe }>
						{current === -1 ? "Add ": "Update "} Recipe
					</button>
				</Modal.Footer>
			</Modal>
		); 
	}	
}


const mapStateToProps = (state) => ({
	current: state.current,
	currentRecipe: state.recipes[state.current] || {name: "", ingredients: []},
	showModal: state.showModal
});


export default connect(
	mapStateToProps, 
	{ addRecipe, updateRecipe, changeModalState }
)(Form);


Form.propTypes = {
	current: PropTypes.number.isRequired,
	currentRecipe: PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(React.PropTypes.string.isRequired)
	}),
	showModal: PropTypes.bool.isRequired,
	addRecipe: PropTypes.func.isRequired,
	updateRecipe: PropTypes.func.isRequired,
	changeModalState: PropTypes.func.isRequired
};








