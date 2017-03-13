import React from 'react';




export default class Ingredients extends React.Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		let listItem = this.props.ingredients.map((ingredient, index)=> {
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
	ingredients: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
}