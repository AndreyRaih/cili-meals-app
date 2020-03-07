export function makeRecieptModel (data) {
  const makeIngridientObj = (ingridient) => ({
    id: ingridient.id,
    name: ingridient.name,
    description: ingridient.originalString,
    amount: ingridient.amount,
    unit: ingridient.unit,
    image: ingridient.image,
    isMissed: true
  });
  const htmlCleanRegExp = new RegExp('<[^>]*>', 'g');
  const model = {
    id: data.id,
    image: data.image, // `https://spoonacular.com/recipeImages/${data.id}-480x360.${data.imageType}`,
    title: data.title,
    description: data.summary.replace(htmlCleanRegExp, ''),
    ingredients: data.extendedIngredients.map(ing => makeIngridientObj(ing)),
    basicInfo: {
      cousine: data.cuisines[0] || 'All',
      type: data.vegetarian ? 'Veg' : 'Non veg',
      amount: data.cookingMinutes ? `${data.cookingMinutes} min` : null
    },
    steps: data.analyzedInstructions[0].steps.map(item => ({ order: item.number, content: item.step })),
    isExtented: false
  };
  return model;
}