import React from 'react';
import StepItem from './item';
import ListView from '@components/list';

import { inject, observer } from 'mobx-react';

function StepsView ({ store }) {
  const { currentReciept } = store;
  const list = currentReciept.steps.map(step => <StepItem key={`${step.number}-item`} content={step} />);
  return (
    <ListView title={'Steps'} emptyMsg={`It's surprise, but all is ready`} list={list} isNoEmpty={!!currentReciept.steps.length} />
  )
}

export default inject('store')(observer(StepsView));