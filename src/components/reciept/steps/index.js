import React from 'react';
import { Text, Animated, StyleSheet, View } from 'react-native';

import { inject, observer } from 'mobx-react';
import StepItem from './item';

function StepsView ({ store }) {
  const { currentReciept } = store;
  return (
    <Animated.ScrollView
      style={styles.dynamicViewBase}>
        <Text style={styles.viewTitle}>Steps</Text>
        <View style={styles.viewListContainer}>
          {currentReciept.steps.map(step => <StepItem key={`${step.number}-item`} content={step} />)}
        </View>
    </Animated.ScrollView>
  )
}

const styles = StyleSheet.create({
  dynamicViewBase: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  viewTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 29,
    letterSpacing: 0.01,
    marginTop: 20
  },
  viewListContainer: {
    marginTop: 8,
    marginBottom: 40
  }
});

export default inject('store')(observer(StepsView));