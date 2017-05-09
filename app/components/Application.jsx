import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Recipe from "./Recipe.jsx";
import Modal from "./Modal.jsx";
import AddRecipe from "./AddRecipe.jsx";



class Application extends Component{

	componentDidUpdate(prevProps) {

		if(prevProps != this.props) {
			localStorage._data = JSON.stringify({
				recipes: this.props.recipes,
				currentRecipe: {
					name: "",
					ingredients: []
				},
				index: -1
			});
		}
	}

	render() {
		const {recipes} = this.props;
		return (
			<div>
				{recipes.map((recipe, index) => <Recipe key={index} index={index}/>)}
				<AddRecipe />
				<Modal />		
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





