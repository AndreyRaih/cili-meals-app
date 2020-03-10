import React, { useState } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

export default function AnimatedCard ({ onCardAction, content, actions }) {
  const [expandedContentArea, changeExpandedContentArea] = useState(false);
  // Initialize vertical's pan values
  const panY = new Animated.Value(0);
  let panValue = 0;
  panY.addListener((pos) => panValue = pos.value);
  // Animations from return to positions after swiping
  const resetBasicPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 400,
  });
  const resetExpandedPositionAnim = Animated.timing(panY, {
    toValue: -460,
    duration: 400,
  });
  // PanResponder handlers for vertical and horisontal swiping behaviour
  const panRespondersVertical = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => false,
    onPanResponderGrant: () => {
      panY.setOffset(panValue);
      panY.setValue(0);
    },
    onPanResponderMove: (e, gs) => {
      const moveTrigger = gs.y0 > 130 && gs.dy > -420 && gs.dy < 200;
      if (moveTrigger) panY.setValue(gs.dy)
    },
    onPanResponderRelease: (e, gs) => {
      panY.flattenOffset();
      if (gs.dy < -20) {
        onCardAction('EXPAND')
        changeExpandedContentArea(true)
        resetExpandedPositionAnim.start()
      }
      if (gs.dy > 20) {
        onCardAction('REDUCE')
        changeExpandedContentArea(false)
        resetBasicPositionAnim.start()
      }
    }
  });
  const panRespondersHorizontal = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => false,
    onPanResponderRelease: (e, gs) => {
      if (gs.dx > 100) {
        onCardAction('PREV')
      }
      if (gs.dx < -100) {
        onCardAction('NEXT')
      }
    }
  });
  // Dynamicly values
  const top = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-0.3, 0, 0.1]
  });
  const height = top.interpolate({
    inputRange: [0, 1],
    outputRange: [260, 259]
  });
  return (
    <Animated.View style={[styles.card, { top }]}>
      <Animated.View style={{ height }}>
        <Animated.View {...panRespondersVertical.panHandlers} style={styles.cardResizeVerticalArea}>
          <View style={styles.cardReziseTriggerElem}></View>
        </Animated.View>
        <Animated.View style={{height: expandedContentArea ? '75%' : '60%'}} {...panRespondersHorizontal.panHandlers}>
          {content}
        </Animated.View>
      </Animated.View>
      <View style={styles.cardActionsArea}>
        {actions}
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: { height: 370, backgroundColor: 'white', flexDirection: 'column', width: '100%', borderTopRightRadius: 15, borderTopLeftRadius: 15, paddingHorizontal: 15},
  cardReziseTriggerElem: { width: 50, height: 5, backgroundColor: '#C4C4C4', borderRadius: 25, alignSelf: 'center', marginBottom: 8},
  cardResizeVerticalArea: { paddingTop: 20},
  cardActionsArea: { flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 20 }
})
