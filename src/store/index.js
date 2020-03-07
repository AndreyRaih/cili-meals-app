import { request } from '@utils/request';
import { decorate, observable, action } from "mobx";
import { makeRecieptModel } from '@utils/models';

const mockModel1 = {
  id: '1',
  image: '@res/thai_food.jpg', // `https://spoonacular.com/recipeImages/${data.id}-480x360.${data.imageType}`,
  title: 'Tom Yam',
  description: `Some description for this food. Some text for
  special moments and awesome stories. And repeat. Some description for this food. Some text for
  special moments and awesome stories. And repeat. Some description for this food. Some text for
  special moments and awesome stories. And repeat.`,
  ingredients: [
    {
      id: '123',
      name: 'test',
      description: 'desc',
      amount: '12',
      unit: 'oz',
      image: null
    }
  ],
  basicInfo: {
    cousine: 'Thai',
    type: 'Non veg',
    amount: '25 min'
  },
  steps: [],
  isExtented: false
};

const mockModel2 = {
  id: '2',
  image: '@res/thai_food.jpg', // `https://spoonacular.com/recipeImages/${data.id}-480x360.${data.imageType}`,
  title: 'Tom Yam 2',
  description: `Some description for this food. Some text for
  special moments and awesome stories. And repeat.`,
  ingredients: [],
  basicInfo: {
    cousine: 'Thai',
    type: 'Non veg',
    amount: '25 min'
  },
  steps: [],
  isExtented: false
};

class Store {
  existingIngridients = null;
  // reciepts = null;
  reciepts = [{id: '1'}, {id: '2'}]
  // currentReciept = null;
  currentReciept = mockModel1;
  isRecieptCardExtented = false;
  addRecieptsList = (reciepts) => this.reciepts = [...reciepts];
  addExistingIngridients = (predictions) => this.existingIngridients = predictions;
  setCurrentReciept = async (id) => {
    /* const fullRecieptInfo = await request({
      method: 'GET',
      url: `https://api.spoonacular.com/recipes/${id}/information`,
      params: {
        apiKey: '77b1e0cc3ec64de6bee8b0cbebb9cb16'
      }
    }); */
    return this.currentReciept = this.currentReciept.id === '1' ? mockModel2 : mockModel1;// makeRecieptModel(fullRecieptInfo);
    // return this.currentReciept = makeRecieptModel(fullRecieptInfo);
  };
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