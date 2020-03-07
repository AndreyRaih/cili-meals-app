import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function CameraButton (props) {
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => props.onCapture()} style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    flex: 2,
    zIndex: 3,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 14
  },
  outerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 8,
    borderColor: '#d6d7da',
  },
  innerCircle: {
    flex: 1,
    margin: 4,
    backgroundColor: '#d6d7da',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
});
