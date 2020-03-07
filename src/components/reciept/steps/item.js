import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { greyDark, dark } from '@res/colors';

export default function StepItem ({ content }) {
  return (
    <View style={styles.layout}>
      <View style={styles.stepContainer}>
        <Text style={styles.step}>{content.number.toString()}</Text>
      </View>
      <View style={styles.textContainer}> 
        <Text style={styles.text}>{content.step}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginVertical: 8
  },
  stepContainer: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomColor: '#BCBBC1',
    paddingBottom: 4,
    borderBottomWidth: 1,
  },
  step: {
    fontWeight: '600',
    fontSize: 32,
    color: greyDark,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
    color: dark
  }
})
