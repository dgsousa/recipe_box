import React, { Component } from "react";
import PropTypes from "prop-types";
import { Accordion, Panel } from "react-bootstrap";

import { connect } from "react-redux";
import Recipe from "./Recipe.jsx";
import Form from "./Form.jsx";
import AddRecipe from "./AddRecipe.jsx";



class Application extends Component{

	componentDidUpdate(prevProps) {
		if(prevProps != this.props) {
			localStorage._data = JSON.stringify({...this.props});
		}
	}

	render() {
		const {recipes} = this.props;
		return (
			<div>
				<Accordion>
					{recipes.map((recipe, index) => (
						<Panel 
							header={recipe.name}
							eventKey={index}
							collapsible={true}
							key={index}
						>
							<Recipe index={index}/>
						</Panel>))
					}
				</Accordion>
				<AddRecipe />
				<Form />
			</div>
		);
	}
}



const mapStateToProps = (state) => ({
	recipes: state.recipes,
	current: state.current,
	showModal: state.showModal
});

export default connect(mapStateToProps)(Application);


Application.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
	})).isRequired,
	current: PropTypes.number.isRequired,
	showModal: PropTypes.bool.isRequired
};






