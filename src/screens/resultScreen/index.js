import React from 'react';
import { View, StyleSheet } from 'react-native';

import RecipeCard from '@components/recipe/card';
import RecipeImage from '@components/recipe/image';
import RecipeDescription from '@components/recipe/description'
import Badge from '@components/badge';
import AnimationWrapper from '@components/animationWrapper';

import { inject, observer } from 'mobx-react';

function ResultScreen ({ store }) {
  const { currentRecipe, isRecipeCardExtented } = store;
  function renderBadges () {
    const badgesView = (
      <AnimationWrapper delay={200} style={styles.descriptionsBadgesContainer}>
        <Badge style={styles.descriptionBadge} text={currentRecipe.basicInfo.cousine} isPrimary />
        <Badge style={styles.descriptionBadge} text={currentRecipe.basicInfo.type} />
        {currentRecipe.basicInfo.amount && <Badge style={styles.descriptionBadge} icon="ios-timer" text={currentRecipe.basicInfo.amount} />}
      </AnimationWrapper> 
    );
    if (isRecipeCardExtented) return badgesView;
  }
  return (
    <View>
      <RecipeImage source={currentRecipe.image}>
        <RecipeDescription />
        {renderBadges()}
      </RecipeImage>
      <View style={styles.recipeCardContainer}>
        <RecipeCard />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  recipeCardContainer: { flex: 1, justifyContent: 'flex-end'},
  descriptionsBadgesContainer: {flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginHorizontal: 20},
  descriptionBadge: { marginRight: 8 }
});

export default inject('store')(observer(ResultScreen));
