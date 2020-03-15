export function makeRecipeModel (data) {
  const makeIngridientObj = (ingridient, missed = true) => ({
    id: ingridient.id,
    name: ingridient.name,
    description: ingridient.originalString,
    amount: ingridient.amount,
    unit: ingridient.unit,
    image: ingridient.image,
    isMissed: missed
  });
  const htmlCleanRegExp = new RegExp('<[^>]*>', 'g');
  const prepareDescription = (text) => {
    const withoutTags = text.replace(htmlCleanRegExp, '');
    const stopPos = withoutTags.indexOf('.');
    return withoutTags.substr(0, stopPos + 1);
  }
  const missed = data.missedIngredients ? data.missedIngredients.map(ing => makeIngridientObj(ing)) : [];
  const unmissed = data.usedIngredients ? data.usedIngredients.map(ing => makeIngridientObj(ing)) : [];
  const steps = data.analyzedInstructions && data.analyzedInstructions.length ? data.analyzedInstructions[0].steps : [];
  const model = {
    id: data.id,
    image: data.image, // `https://spoonacular.com/recipeImages/${data.id}-480x360.${data.imageType}`,
    title: data.title,
    description: data.summary ? prepareDescription(data.summary) : 'No comments',
    ingredients: unmissed.concat(missed),
    basicInfo: {
      cousine: data.cuisines ? data.cuisines[0] || 'All' : 'All',
      type: data.vegetarian ? 'Veg' : 'Non veg',
      amount: data.cookingMinutes ? `${data.cookingMinutes} min` : null
    },
    steps,
    isExtented: false
  };
  return model;
}