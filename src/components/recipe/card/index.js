import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';

import AnimatedCard from './animatedCard';
import Info from '../info';
import Ingridients from '../ingridients';
import Steps from '../steps'
import FinallMsg from '../finalMsg';
import ActionButton from './actionButton';
import RecipeSliderIndicator from './slideIndicator';

function RecipeCard ({ store }) {
  const [currentStage, setCurrentStage] = useState(1);
  const { setCurrentRecipe, changeCurrentRecipeExpandState, currentRecipe, recipes } = store;

  const changeCardActions = (action) => {
    const currentRecipPos = recipes.findIndex(recip => recip.id === currentRecipe.id);
    switch (action) {
      case 'NEXT':
        const nextRecipId = recipes[currentRecipPos + 1].id;
        setCurrentStage(1);
        return setCurrentRecipe(nextRecipId);
      case 'PREV':
        const prevRecipId = recipes[currentRecipPos - 1].id
        setCurrentStage(1);
        return setCurrentRecipe(prevRecipId)
      case 'EXPAND':
        return changeCurrentRecipeExpandState(true);
      case 'REDUCE':
        return changeCurrentRecipeExpandState(false);
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

  function actionButtonIsDisabled () {
    const disabledTrigger = currentStage === 2 && !currentRecipe.ingredients.every(item => !item.isMissed);
    return disabledTrigger;
  }

  function nextStage () {
    const nextStage = currentStage + 1;
    currentStage < 4 ? setCurrentStage(nextStage) : setCurrentStage(1)
  };

  function renderCardActions () {
    return (
      <>
        <RecipeSliderIndicator style={styles.cardSliderIndicator} />
        <ActionButton onPress={() => nextStage()} text={renderActionBtnText()} disabled={actionButtonIsDisabled()} />
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

export default inject('store')(observer(RecipeCard));