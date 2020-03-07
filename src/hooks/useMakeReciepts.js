import { request } from '@utils/request';

export async function useMakeReciepts (predictions) {
  try {
    const params = {
      number: 3,
      ingredients: predictions.join(',').toLowerCase(),
      apiKey: '77b1e0cc3ec64de6bee8b0cbebb9cb16'
    };
    const recieptsList = await request({
      method: 'GET',
      url: 'https://api.spoonacular.com/recipes/findByIngredients',
      params
    });
    return recieptsList.map(result => ({id: result.id, name: result.title }));
  } catch (error) {
    console.log(error);
  }
}