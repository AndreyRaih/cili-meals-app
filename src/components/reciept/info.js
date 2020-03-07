import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { greyLight, subtext, text } from '@res/colors';

import Badge from '../badge';
import AnimationWrapper from "../animationWrapper";

import { inject, observer } from 'mobx-react';

function RecieptInfo ({store, style}) {
  const { currentReciept, isRecieptCardExtented } = store
  return (
    <View style={style}>
      <View style={{...styles.basicInfoContainer}}>
        <Text style={styles.basicInfoLabel}>Basic info</Text>
        <View style={styles.basicInfoBagesContainer}>
          <Badge text={currentReciept.basicInfo.cousine} isPrimary />
          <Badge text={currentReciept.basicInfo.type} style={{ marginLeft: 8 }} />
          {currentReciept.basicInfo.amount && <Badge icon="ios-timer" text={currentReciept.basicInfo.amount} style={{ marginLeft: 'auto' }} />}
        </View>
      </View>
      <View style={{...styles.descrptionContainer, flex: 1, height: '100%' }}>
        <AnimationWrapper>
          <Text style={styles.descrptionTitle}>Description:</Text>
          <Text ellipsizeMode='tail' numberOfLines={isRecieptCardExtented ? 10 : 4} style={styles.descrptionText}>{currentReciept.description}</Text>
        </AnimationWrapper>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  basicInfoContainer: {borderBottomColor: greyLight, borderBottomWidth: 1},
  basicInfoLabel: {fontSize: 18, lineHeight: 21, color: subtext },
  basicInfoBagesContainer: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 8},
  descrptionContainer: { marginTop: 12, flex: 2 },
  descrptionTitle: { color: text, fontWeight: '600', fontSize: 28, lineHeight: 33, marginBottom: 8 },
  descrptionText: { color: text, fontSize: 18, lineHeight: 21 }
});

export default inject('store')(observer(RecieptInfo))
