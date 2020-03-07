import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';

import AnimatedCard from './animatedCard';
import Info from '../info';
import Ingridients from '../ingridients';
import Steps from '../steps'
import FinallMsg from '../finalView';
import ActionButton from './actionButton';
import RecieptSliderIndicator from './slideIndicator';

function RecieptCard ({ store }) {
  const [currentStage, setCurrentStage] = useState(1);
  const { setCurrentReciept, changeCurrentRecieptExpandState } = store;

  const changeCardActions = (action) => {
    switch (action) {
      case 'NEXT':
        setCurrentStage(1);
        return setCurrentReciept('2');
      case 'PREV':
        setCurrentStage(1);
        return setCurrentReciept('1')
      case 'EXPAND':
        return changeCurrentRecieptExpandState(true);
      case 'REDUCE':
        return changeCurrentRecieptExpandState(false);
    }
  }

  function renderCardContent () {
    switch (currentStage) {
      case 1:
        return (<Info style={styles.contentContainer} />);
      case 2:
        return (<Ingridients style={styles.contentContainer} />);
      case 3:
        return (<Steps style={styles.contentContainer} />);
      case 4:
        return (<FinallMsg style={styles.contentContainer} />);
    }
  }

  function renderActionBtnText () {
    switch (currentStage) {
      case 1:
        return 'Show ingridients';
      case 2:
        return 'Go to steps'
      case 3:
        return 'Enjoy your meal'
      case 4:
        return 'Done'
    }
  }

  function nextStage () {
    const nextStage = currentStage + 1;
    currentStage < 4 ? setCurrentStage(nextStage) : setCurrentStage(1)
  };

  function renderCardActions () {
    return (
      <>
        <RecieptSliderIndicator style={styles.cardSliderIndicator} />
        <ActionButton onPress={() => nextStage()} text={renderActionBtnText()} />
      </>
    )
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