

export const addRecipe = (name, ingredients) => ({
	type: "ADD_RECIPE",
	recipe: {name, ingredients}
});
	
export const updateRecipe = (name, ingredients, current) => ({
	type: "UPDATE_RECIPE",
	current,
	recipe: {name, ingredients}
});

export const removeRecipe = (index) => ({
	type: "REMOVE_RECIPE",
	index
});

export const setCurrentRecipe = (index = -1) => ({
	type: "SET_CURRENT_RECIPE",
	index
});

export const changeModalState = (bool = false) => ({
	type: "CHANGE_MODAL_STATE",
	bool
});
