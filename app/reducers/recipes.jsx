

export default function Recipe(state, action) {
	switch(action.type) {	
	case "ADD_RECIPE": {
		const recipes = [...state.recipes, action.recipe];
		return {
			...state,
			recipes: recipes
		};
	}
	
	case "REMOVE_RECIPE": {
		const recipes = [...state.recipes.slice(0, action.index), ...state.recipes.slice(action.index + 1)];
		return {
			...state,
			recipes: recipes
		};
	}


	case "UPDATE_RECIPE": {
		const recipes = [...state.recipes.slice(0, action.index), action.recipe, ...state.recipes.slice(action.index + 1)];
		return {
			...state,
			recipes: recipes, 
			index: action.index
		};
	}

	case "SET_CURRENT_RECIPE": {
		const currentRecipe = action.index === -1 ? {name: "", ingredients: []} : state.recipes[action.index];
		return {
			...state,
			currentRecipe: currentRecipe,
			index: action.index
		};
		
	}

	default: 
		return state;
	}
}




