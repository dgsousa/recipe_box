import * as RecipeActionTypes from '../actions/recipes.jsx';


export default function Recipe(state, action) {
	console.log(state);
	switch(action.type) {
		case RecipeActionTypes.ADD_RECIPE: {
			const recipes = [...state.recipes, action.recipe]
			return {
				...state,
				recipes: recipes
			}
		}
		
		case RecipeActionTypes.REMOVE_RECIPE: {
			const recipes = state.recipes.splice(index, 1);
			return {
				...state,
				recipes: recipes
			}
		}


		case RecipeActionTypes.UPDATE_RECIPE: {
			const recipes = state.recipes.splice(index, 1, action.recipe)
			return {
				...state,
				recipes: recipes
			}
		}

		case RecipeActionTypes.SET_CURRENT_RECIPE: {
			const currentRecipe = action.index === -1 ? {name: '', ingredients: []} : state.recipes[action.index];
			return {
				...state,
				currentRecipe: currentRecipe
			}
			
		}

		default: 
			return state;
	}
}




