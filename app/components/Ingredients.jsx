import React, {PropTypes} from "react";






const Ingredients = ({ingredients}) => {
	
	return (
		<div className="recipe-list">
			<ul className="list-group">
				{ingredients.map((ingredient, index)=> (<li className="list-group-item" key={index}>{ingredient}</li>))}
			</ul>
		</div>
	);
};


Ingredients.propTypes = {
	ingredients: PropTypes.arrayOf(React.PropTypes.string.isRequired)
};




export default Ingredients;