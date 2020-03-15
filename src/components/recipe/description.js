
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { inject, observer } from 'mobx-react';

import AnimationWrapper from '@components/animationWrapper';

function Description ({ store }) {
  const { title } = store.currentRecipe;
  return (
    <View style={styles.view}>
      <AnimationWrapper>
        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}>{title}</Text>
      </AnimationWrapper>
    </View>
  )
};

export default inject('store')(observer(Description));

const styles = StyleSheet.create({
  view: {
    flex: 2,
    justifyContent: 'flex-start',
    marginTop: 20,
    marginHorizontal: 20
  },
  title: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold'
  },
});