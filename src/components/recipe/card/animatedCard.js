import React, { useState } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

// Initialize Y axios values
const panPositionYAxis = new Animated.Value(0);
let panPositionYAxisSavedValue = 0;
// Initialize vertical's pan values
panPositionYAxis.addListener((pos) => panPositionYAxisSavedValue = pos.value);

export default function AnimatedCard ({ onCardAction, content, actions }) {
  const [expandedContentArea, changeExpandedContentArea] = useState(false);
  // Animations from return to positions after swiping
  const resetBasicPositionAnim = Animated.timing(panPositionYAxis, {
    toValue: 0,
    duration: 400,
  });
  const resetExpandedPositionAnim = Animated.timing(panPositionYAxis, {
    toValue: -460,
    duration: 400,
  });
  // PanResponder handlers for vertical and horisontal swiping behaviour
  const panRespondersVertical = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => false,
    onPanResponderGrant: () => {
      panPositionYAxis.setOffset(panPositionYAxisSavedValue);
      panPositionYAxis.setValue(0);
    },
    onPanResponderMove: (e, gs) => {
      const moveTrigger = gs.y0 > 130 && gs.dy > -420 && gs.dy < 200;
      if (moveTrigger) panPositionYAxis.setValue(gs.dy)
    },
    onPanResponderRelease: (e, gs) => {
      panPositionYAxis.flattenOffset();
      if (gs.dy < -20) {
        onCardAction('EXPAND')
        changeExpandedContentArea(true)
        return resetExpandedPositionAnim.start();
      }
      if (gs.dy > 60) {
        onCardAction('REDUCE')
        changeExpandedContentArea(false)
        return resetBasicPositionAnim.start();
      }
      return expandedContentArea ? resetExpandedPositionAnim.start() : resetBasicPositionAnim.start();
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
  const top = panPositionYAxis.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-0.3, 0, 0.1]
  });
  const height = top.interpolate({
    inputRange: [0, 1],
    outputRange: [260, 259]
  });
  const contentZoneHeight = top.interpolate({
    inputRange: [0, 1],
    outputRange: [140, 139]
  })
  return (
    <Animated.View style={[styles.card, { top }]}>
      <Animated.View style={{ height }}>
        <Animated.View {...panRespondersVertical.panHandlers} style={styles.cardResizeVerticalArea}>
          <View style={styles.cardReziseTriggerElem}></View>
        </Animated.View>
        <Animated.View style={{height: contentZoneHeight}} {...panRespondersHorizontal.panHandlers}>
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
