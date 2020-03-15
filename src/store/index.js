import { request } from '@utils/request';
import { decorate, observable, action } from "mobx";
import { makeRecipeModel } from '@utils/models';

class Store {
  recipes = null;
  currentRecipe = null;
  isRecipeCardExtented = false;
  addRecipesList = (recipes) => this.recipes = [...recipes];
  setCurrentRecipe = (id) => this.currentRecipe = makeRecipeModel(this.recipes.find(recip => recip.id === id));
  changeCurrentRecipeIngridientItem = (id) => {
    const ingridientPos = this.currentRecipe.ingredients.findIndex(ingr => ingr.id === id);
    this.currentRecipe.ingredients[ingridientPos].isMissed = !this.currentRecipe.ingredients[ingridientPos].isMissed;
  }
  changeCurrentRecipeExpandState = (value) => this.isRecipeCardExtented = value;
}

decorate(Store, {
  recipes: observable,
  currentRecipe: observable,
  isRecipeCardExtented: observable,
  addRecipesList: action,
  setCurrentRecipe: action,
  changeCurrentRecipeExpandState: action,
});

export default new Store();