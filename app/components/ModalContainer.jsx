import React, {Component, PropTypes} from "react";
import Modal from "./Modal.jsx";

export default class ModalContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			ingredients: []
		};
	}

	componentWillReceiveProps(nextProps) {
		if(this.props !== nextProps) {
			this.setState({
				name: nextProps.currentRecipe.name,
				ingredients: nextProps.currentRecipe.ingredients,
				index: nextProps.index
			});	
		}
	}

	updateName(e) {
		this.setState({
			name: e.target.value
		});
	}

	updateIngredients(e) {
		this.setState({
			ingredients: e.target.value.split(",")
		});
	}

	updateRecipe(e) {
		e.preventDefault();
		if(this.state.name && this.state.ingredients) {
			this.props.update(this.props.index, this.state);
		}
	}

	addRecipe(e) {
		e.preventDefault();
		if(this.state.name && this.state.ingredients) {
			this.props.add(this.state);
		}
	}

	render() {
		return (
			<Modal
				onSubmit = {this.props.index === -1 ? this.addRecipe.bind(this): this.updateRecipe.bind(this)} 
				onChangeName = {this.updateName.bind(this)}
				onChangeIngredient = {this.updateIngredients.bind(this)} 
				name={this.state.name}
				ingredients={this.state.ingredients}
				index={this.props.index}/>
		);
	}
}


ModalContainer.propTypes = {
	currentRecipe: PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(React.PropTypes.string.isRequired)
	}),
	index: PropTypes.number.isRequired,
	add: PropTypes.func.isRequired,
	update: PropTypes.func.isRequired
};





