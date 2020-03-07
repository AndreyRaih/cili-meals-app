import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { primary, greyDark } from '@res/colors';
import { basicShadow } from '@res/shadows';
import { Ionicons } from '@expo/vector-icons';

export default function Badge ({ text, isPrimary, icon, style }) {
  return (
    <View style={[styles.badge, style, { backgroundColor: isPrimary ? primary : greyDark }]}>
      {icon && <Ionicons style={styles.icon} name={'ios-timer'} size={16} color="white" />}
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {borderRadius: 100, paddingHorizontal: 8, paddingVertical: 5, textAlign: 'center', ...basicShadow, flexDirection: 'row', alignItems: 'center', height: 25},
  icon: { marginRight: 2 },
  text: { fontWeight: '600', fontSize: 12, lineHeight: 14, color: 'white', textTransform: 'capitalize' }
});