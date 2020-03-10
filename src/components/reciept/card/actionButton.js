
import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import { buttonShadow } from '@res/shadows';
import { primary } from '@res/colors';

export default function ActionButton ({ onPress, text, disabled }) {
  return (
    <TouchableHighlight
      underlayColor={'#D46100'}
      onPress={() => onPress()}
      style={[styles.button, { opacity: disabled ? 0.5 : 1 }]}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primary,
    borderRadius: 12,
    padding: 12,
    width: '90%',
    alignSelf: 'center',
    ...buttonShadow
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff'
  }
});