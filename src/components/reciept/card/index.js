import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';

import RecieptInfo from '../info';
import AnimatedCard from './animatedCard';
import Ingridients from '../ingridients';
import ActionButton from './actionButton';
import RecieptSliderIndicator from './slideIndicator';

function RecieptCard ({ store }) {
  const [currentStage, setCurrentStage] = useState('info');
  const { setCurrentReciept, changeCurrentRecieptExpandState } = store;

  const changeCardActions = (action) => {
    switch (action) {
      case 'NEXT':
        setCurrentStage('info');
        return setCurrentReciept('2');
      case 'PREV':
        setCurrentStage('info');
        return setCurrentReciept('1')
      case 'EXPAND':
        return changeCurrentRecieptExpandState(true);
      case 'REDUCE':
        return changeCurrentRecieptExpandState(false);
    }
  }

  function renderCardContent () {
    switch (currentStage) {
      case 'info':
        return (<RecieptInfo style={styles.contentContainer} />);
      case 'ingridients':
        return (<Ingridients style={styles.contentContainer} />)
    }
  }

  function renderCardActions () {
    return (
      <>
        <RecieptSliderIndicator style={styles.cardSliderIndicator} />
        <ActionButton onPress={() => setCurrentStage('ingridients')} text={renderActionBtnText()} />
      </>
    )
  }

  function renderActionBtnText () {
    switch (currentStage) {
      case 'info':
        return 'Show ingridients';
      case 'ingridients':
        return 'Go to steps'
    }
  }
  return (
    <AnimatedCard content={renderCardContent()} actions={renderCardActions()} onCardAction={(action) => changeCardActions(action)} />
  )
}

const styles = StyleSheet.create({
  contentContainer: {flex: 2},
  cardSliderIndicator: { marginBottom: 12}
})

export default inject('store')(observer(RecieptCard));