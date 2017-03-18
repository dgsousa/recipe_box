import * as RecipeActionTypes from './actiontypes/recipes';




export const addRecipe = recipe => {
	return {
		type: RecipeActionTypes.ADD_RECIPE,
		recipe
	};
};

export const updateRecipe = (index, recipe=null) => {
	return {
		type: RecipeActionTypes.UPDATE_RECIPE,
		recipe,
		index
	};
};

export const setCurrentRecipe = (index=-1) => {
	return {
		type: RecipeActionTypes.SET_CURRENT_RECIPE,
		index
	};
};