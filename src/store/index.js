import { request } from '@utils/request';
import { decorate, observable, action } from "mobx";
import { makeRecieptModel } from '@utils/models';

// Add moks model
import { reciepMockObj1, reciepMockObj2, reciepsArray } from './mocks';

class Store {
  existingIngridients = null;
  // Normally working models
  // reciepts = null;
  // currentReciept = null;
  // Mocks working models
  reciepts = reciepsArray
  currentReciept = reciepMockObj1;
  isRecieptCardExtented = false;
  addRecieptsList = (reciepts) => this.reciepts = [...reciepts];
  addExistingIngridients = (predictions) => this.existingIngridients = predictions;
  // Normally setCurrentReciept action
  /*
  setCurrentReciept = async (id) => {
    const fullRecieptInfo = await request({
      method: 'GET',
      url: `https://api.spoonacular.com/recipes/${id}/information`,
      params: {
        apiKey: '77b1e0cc3ec64de6bee8b0cbebb9cb16'
      }
    });
    // Add to pre-makig checking to existingIngridientsArray
    return this.currentReciept = makeRecieptModel(fullRecieptInfo);
  };
  */
  // Mock setCurrentReciept action
  setCurrentReciept = async (id) => this.currentReciept = this.currentReciept.id === '1' ? reciepMockObj2 : reciepMockObj1;
  changeCurrentRecieptIngridientItem = (id) => {
    const ingridientPos = this.currentReciept.ingredients.findIndex(ingr => ingr.id === id);
    this.currentReciept.ingredients[ingridientPos].isMissed = !this.currentReciept.ingredients[ingridientPos].isMissed;
  }
  changeCurrentRecieptExpandState = (value) => this.isRecieptCardExtented = value;
}

decorate(Store, {
  existingIngridients: observable,
  reciepts: observable,
  currentReciept: observable,
  isRecieptCardExtented: observable,
  addExistingIngridients: action,
  addRecieptsList: action,
  setCurrentReciept: action,
  changeCurrentRecieptExtentState: action,
  getFullRecieptInfo: action,
  changeReciept: action,
  closeAllRecieptInfo: action
});

export default new Store();