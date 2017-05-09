import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import {addRecipe, updateRecipe} from "../actions/recipes.jsx";


class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			ingredients: [],
			index: -1
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			name: nextProps.currentRecipe.name,
			ingredients: nextProps.currentRecipe.ingredients,
			index: nextProps.index
		});
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value
		});
	}

	handleIngredientChange(e) {
		this.setState({
			ingredients: e.target.value.split(",")
		});
	}


	render() {
		const {name, ingredients, index} = this.state;
		const {addRecipe, updateRecipe} = this.props;
		return (
			<div className="modal fade" id="myModal">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{index === -1 ? "Add a ": "Update "}Recipe</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form onSubmit={index === -1 ? addRecipe : (e) => {updateRecipe(e, index);}}>
								<div className="form-group">
									<label 
										htmlFor="recipe-name">Recipe
									</label>
									<input 
										className="form-control" 
										type="text" 
										value={name}
										onChange={this.handleNameChange.bind(this)}
										name="name"/>
								</div>


								<div className="form-group">
									<label 
										htmlFor="indgredients">Ingredients</label>
									<input 
										className="form-control"
										type="textarea" 
										value={ingredients}
										onChange={this.handleIngredientChange.bind(this)}
										name="ingredients"/>
								</div>

								<div className="modal-footer">
									<button 
										type="submit" 
										className="btn btn-danger" 
										data-toggle="modal" 
										data-target="#myModal">	
										{index === -1 ? "Add ": "Update "} 
										Recipe
									</button>
									<button 
										type="button" 
										className="btn btn-secondary" 
										data-dismiss="modal">
										Close
									</button>
								</div>
							</form>
						</div>  
					</div>
				</div>
			</div> 
		); 
	}	
}

Modal.propTypes = {
	currentRecipe: PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(PropTypes.string.isRequired)
	}),
	index: PropTypes.number.isRequired,
	addRecipe: PropTypes.func.isRequired,
	updateRecipe: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
	currentRecipe: state.currentRecipe,
	index: state.index
});


export default connect(
	mapStateToProps,
	{
		addRecipe: addRecipe,
		updateRecipe: updateRecipe
	}
)(Modal);








