

export const addRecipe = e => {
	e.preventDefault();
	if(e.target.name.value && e.target.ingredients.value) {
		return {
			type: "ADD_RECIPE",
			recipe: {
				name: e.target.name.value,
				ingredients: e.target.ingredients.value.split(",")
			}
		};
	}
	return {
		type: "DEFAULT"
	};
};

export const updateRecipe = (e, index) => {
	e.preventDefault();
	if(e.target.name.value && e.target.ingredients.value) {
		return {
			type: "UPDATE_RECIPE",
			index,
			recipe: {
				name: e.target.name.value,
				ingredients: e.target.ingredients.value.split(",")
			}
		};
	} else {
		return {
			type: "REMOVE_RECIPE",
			index
		};
	}
};

export const removeRecipe = (index) => {
	return {
		type: "REMOVE_RECIPE",
		index
	};
};

export const setCurrentRecipe = (index = -1) => {
	return {
		type: "SET_CURRENT_RECIPE",
		index
	};
};