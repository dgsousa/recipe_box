import * as RecipeActionTypes from './actiontypes/recipes';




export const addRecipe = recipe => {
	return {
		type: RecipeActionTypes.ADD_PLAYER,
		recipe
	};
};

export const removeRecipe = index => {
	return {
		type: RecipeActionTypes.REMOVE_PLAYER,
		index
	};
};

export const updateRecipe = (recipe, index) => {
	return {
		type: RecipeActionTypes.UPDATE_PLAYER,
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