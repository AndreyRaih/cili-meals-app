import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { subtext, greyLight } from '@res/colors';


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
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 0.01,
    marginTop: 20
  },
  content: {
    marginTop: 8,
    paddingVertical: 12,
    marginBottom: 40,
    height: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: greyLight,
    borderTopColor: greyLight
  },
  empty: {
    marginTop: 8,
    fontSize: 18,
    color: subtext,
  }
});
