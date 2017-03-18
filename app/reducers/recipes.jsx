import * as RecipeActionTypes from '../actions/recipes.jsx';


{
	recipes: [],
	currentRecipe: {
		name: '',
		ingredients: []
	},
	index: -1
}


export default function Recipe(state, action) {
	console.log(state);
	switch(action.type) {
		case RecipeActionTypes.ADD_PLAYER: {
			const recipes = [...state.recipes, action.recipe]
			return {
				...state,
				recipes: recipes
			}
		}
		
		case RecipeActionTypes.REMOVE_PLAYER:


		case RecipeActionTypes.UPDATE_PLAYER:



		case RecipeActionTypes.SET_CURRENT_PLAYER:
		
	
	}
}