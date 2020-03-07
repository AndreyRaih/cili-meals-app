import React from 'react';
import { Text, Animated, StyleSheet, View } from 'react-native';

import IngridientItem from './item';

import { inject, observer } from 'mobx-react';

function IngridientsView ({ store }) {
  const { currentReciept, changeCurrentRecieptIngridientItem } = store;
  return (
    <Animated.ScrollView
      style={styles.dynamicViewBase}>
        <Text style={styles.viewTitle}>Ingridients</Text>
        <View style={styles.viewListContainer}>
          {currentReciept.ingredients.map((ingridient, index) => <IngridientItem key={`${index}-ingridient`} content={ingridient} isMissed={ingridient.isMissed} onChange={(id) => changeCurrentRecieptIngridientItem(id)} />)}
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

export default inject('store')(observer(IngridientsView));