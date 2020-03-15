import { request } from '@utils/request';

import { SPOONACULAR_API_KEY } from 'react-native-dotenv';

export async function useMakeRecipes (predictions) {
  try {
    const params = {
      apiKey: SPOONACULAR_API_KEY,
      number: 3,
      includeIngredients: 'tomato', // predictions.join(',').toLowerCase(),
      addRecipeInformation: true,
      fillIngredients: true,
      cuisine: 'thai,vietnamese,korean,indian,japanese'
    };
    const recipesList = await request({
      method: 'GET',
      url: 'https://api.spoonacular.com/recipes/complexSearch',
      params
    });
    console.log(params, recipesList);
    return recipesList.results;
  } catch (error) {
    console.log(error);
  }
}