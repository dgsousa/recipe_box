

export default function Recipe(state, action) {
	switch(action.type) {	
	case "ADD_RECIPE": {
		return {
			...state,
			recipes: [...state.recipes, action.recipe]
		};
	}
	
	case "REMOVE_RECIPE": {
		return {
			...state,
			recipes: [...state.recipes.slice(0, action.index), ...state.recipes.slice(action.index + 1)],
			current: -1
		};
	}

	case "UPDATE_RECIPE": {
		return {
			...state,
			recipes: [...state.recipes.slice(0, state.current), action.recipe, ...state.recipes.slice(state.current + 1)]
		};
	}

	case "SET_CURRENT_RECIPE": {
		return {
			...state,
			current: action.index
		};
		
	}

	case "CHANGE_MODAL_STATE": {
		return {
			...state,
			showModal: action.bool
		};
	}

	default: 
		return state;
	}
}




