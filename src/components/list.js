import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { subtext } from '@res/colors';


export default function ListView ({ title, emptyMsg, list, isNoEmpty }) {
  function renderContent () {
    const listView = (
      <ScrollView style={styles.content}>
        {list}
      </ScrollView>
    );
    const emptyView = (<Text style={styles.empty}>{emptyMsg}</Text>)
    return isNoEmpty ? listView : emptyView;
  }
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>{title}</Text>
      {renderContent()}
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 29,
    letterSpacing: 0.01,
    marginTop: 20
  },
  content: {
    marginTop: 8,
    height: '100%'
  },
  empty: {
    marginTop: 8,
    fontSize: 18,
    color: subtext,
  }
});
