import React from 'react';
import StepItem from './item';
import ListView from '@components/list';

import { inject, observer } from 'mobx-react';

function StepsView ({ store }) {
  const { currentRecipe } = store;
  const list = currentRecipe.steps.map((step, index) => <StepItem key={`${index}-item`} content={step} />);
  return (
    <ListView title={'Steps'} emptyMsg={`It's surprise, but all is ready`} list={list} isNoEmpty={!!currentRecipe.steps.length} />
  )
}

export default inject('store')(observer(StepsView));