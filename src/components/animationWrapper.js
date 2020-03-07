import React, { useEffect } from 'react';
import { Animated } from 'react-native';

export default function AnimationWrapper ({ delay = 0, children, style }) {
  const opacity = new Animated.Value(0);
  const position = new Animated.Value(-40)
  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        delay: delay,
        useNativeDriver: true
      }),
      Animated.timing(position, {
        toValue: 0,
        duration: 200,
        delay: delay,
        useNativeDriver: true
      })
    ]).start();
  }, [children])
  return (
    <Animated.View style={{opacity: opacity, transform: [{ translateX: position }], ...style}}>
      {children}
    </Animated.View>
  )
}