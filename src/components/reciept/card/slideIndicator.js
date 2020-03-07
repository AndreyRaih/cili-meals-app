import React from 'react';
import { View, StyleSheet } from 'react-native';

import { dark } from '@res/colors';

import { inject, observer } from 'mobx-react';

function RecieptSliderIndicator ({style, store}) {
  const { reciepts, currentReciept } = store;
  const isActive = (id) => currentReciept.id === id;
  return (
    <View style={{...styles.layout, ...style}}>
      {reciepts.map((point, index) => <View key={`point-${index}`} style={{...styles.point, opacity: isActive(point.id) ? 1 : 0.2 }} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 55
  },
  point: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: dark
  }
});

export default inject('store')(observer(RecieptSliderIndicator));