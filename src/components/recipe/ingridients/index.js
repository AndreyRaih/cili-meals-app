import React from 'react';
import IngridientItem from './item';
import ListView from '@components/list';

import { inject, observer } from 'mobx-react';

function IngridientsView ({ store }) {
  const { currentRecipe, changeCurrentRecipeIngridientItem } = store;
  const list = currentRecipe.ingredients.map((ingridient, index) => <IngridientItem key={`${index}-ingridient`} content={ingridient} isMissed={ingridient.isMissed} onChange={(id) => changeCurrentRecipeIngridientItem(id)} />)
  return (
    <ListView title={'Ingridients'} emptyMsg={`So, it's quite easy!`} list={list} isNoEmpty={!!currentRecipe.ingredients.length} />
  )
}

export default inject('store')(observer(IngridientsView));