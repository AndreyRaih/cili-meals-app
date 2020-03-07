import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FinalView () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>We hope that everything was successful!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  text: { fontWeight: 'bold', fontSize: 36, lineHeight: 43, textAlign: 'center' }
})