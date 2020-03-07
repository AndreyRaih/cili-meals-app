import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function CameraFocusArea () {
  return (
    <View style={styles.view}>
      <View style={{...styles.cornerBasic, ...styles.cornerLeftTop}} />
      <View style={{...styles.cornerBasic, ...styles.cornerLeftBottom}} />
      <View style={{...styles.cornerBasic, ...styles.cornerRightTop}} />
      <View style={{...styles.cornerBasic, ...styles.cornerRightBottom}} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    position: 'relative',
    width: 325,
    height: 500,
    alignSelf: 'center',
    marginVertical: 40
  },
  cornerBasic: {
    height: 30,
    width: 34.5,
    position: 'absolute'
  },
  cornerLeftTop: {
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderTopWidth: 12,
    borderLeftWidth: 12,
    borderTopLeftRadius: 20,
    top: 0,
    left: 0
  },
  cornerLeftBottom: {
    borderBottomColor: '#fff',
    borderLeftColor: '#fff',
    borderBottomWidth: 12,
    borderLeftWidth: 12,
    borderBottomLeftRadius: 20,
    bottom: 0,
    left: 0
  },
  cornerRightTop: {
    borderTopColor: '#fff',
    borderRightColor: '#fff',
    borderTopWidth: 12,
    borderRightWidth: 12,
    borderTopRightRadius: 20,
    top: 0,
    right: 0
  },
  cornerRightBottom: {
    borderBottomColor: '#fff',
    borderRightColor: '#fff',
    borderBottomWidth: 12,
    borderRightWidth: 12,
    borderBottomRightRadius: 20,
    bottom: 0,
    right: 0
  }
})