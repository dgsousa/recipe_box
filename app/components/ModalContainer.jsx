import React from 'react';
import Modal from './Modal.jsx';

export default class ModalContainer extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			ingredients: [],
			index: this.props.index
		}
	}

	componentWillReceiveProps(nextProps) {
		if(this.props !== nextProps) {
			this.setState({
				name: nextProps.currentRecipe.name,
				ingredients: nextProps.currentRecipe.ingredients,
				index: nextProps.index
			})	
		}
	}

	updateName(e) {
		this.setState({
			name: e.target.value
		})
	}

	updateIngredients(e) {
		this.setState({
			ingredients: e.target.value.split(',')
		})
	}

	updateRecipe(e) {
		e.preventDefault();
		this.props.update(this.state, this.props.index);
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
		)
	}
}


ModalContainer.propTypes = {
	currentRecipe: React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		ingredients: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
	}),
	index: React.PropTypes.number.isRequired,
	add: React.PropTypes.func.isRequired,
	update: React.PropTypes.func.isRequired
}





