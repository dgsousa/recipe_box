import React, {Component, PropTypes} from 'react';




export default class Ingredients extends Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		const listItem = this.props.ingredients.map((ingredient, index)=> {
			return (
				<li className="list-group-item" key={index}>{ingredient}</li>
			)
		})
		return (
			<div className="recipe-list">
				<ul className="list-group">
	      			{listItem}
	      		</ul>
      		</div>
		)
	}
}


Ingredients.propTypes = {
	ingredients: PropTypes.arrayOf(React.PropTypes.string.isRequired)
}