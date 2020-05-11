import { request } from '@utils/request';

import { SPOONACULAR_API_KEY } from 'react-native-dotenv';

export async function useMakeRecipes (predictions) {
  try {
    const params = {
      apiKey: SPOONACULAR_API_KEY,
      number: 3,
      query: predictions.join(',').toLowerCase(),
      addRecipeInformation: true,
      fillIngredients: true
    };
    const recipesList = await request({
      method: 'GET',
      url: 'https://api.spoonacular.com/recipes/complexSearch',
      params
    });
    return recipesList.results;
  } catch (error) {
    console.log(error);
  }
}