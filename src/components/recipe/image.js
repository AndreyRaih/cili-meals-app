import * as React from "react";
import { Image, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default function RecipeImage ({source, children, style}) {
  return (
    <View style={[styles.layout, style]}>
      <View style={styles.innerContent}>{children}</View>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)']}
        locations={[0, 0.7]}
        style={styles.overlay}>
      </LinearGradient>
      <Image style={styles.img} source={{ uri: source }} />
    </View>
  )
}

const styles = StyleSheet.create({
  layout: { width, backgroundColor: 'white', height: '100%' },
  innerContent: { position: 'absolute', zIndex: 20, top: 20 },
  overlay: { zIndex: 10, position: 'absolute', width: '100%', height: '100%'},
  img: {zIndex: 5, width: '100%', height: '50%', resizeMode: 'cover'}
})