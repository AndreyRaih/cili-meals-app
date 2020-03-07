import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import { basicShadow } from '@res/shadows';
import { primary, subtext } from '@res/colors';

export default function IngridientItem ({ content, onChange }) {
  const [ingridientIsMissed, changeIngridientState] = useState(content.missed);
  useEffect(() => {
    onChange(Object.assign({}, content, {missed: ingridientIsMissed}));
  }, [ingridientIsMissed])
  return (
    <View style={{opacity: !ingridientIsMissed ? 1 : 0.5 }}>
      <TouchableOpacity style={styles.layout} onPress={() => changeIngridientState(!ingridientIsMissed)}>
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={{uri: content.image}}></Image>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.main}>
            <Text style={styles.nameText}>{content.name}</Text>
            <Text style={styles.descriptionText}>{content.description}</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <RoundCheckbox
              checked={ingridientIsMissed === false ? true : false}
              backgroundColor={primary}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8
  },
  imageContainer: {
    width: 50,
    height: 50,
    marginRight: 8,
    ...basicShadow
  },
  textContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomColor: '#BCBBC1',
    paddingBottom: 4,
    borderBottomWidth: 1,
    paddingLeft: 8
  },
  img: {
    width: '100%',
    height: "100%",
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 1,
    resizeMode: 'contain'
  },
  main: {
    flex: 3,
    flexDirection: 'column'
  },
  checkboxContainer: {
    width: 25
  },
  nameText: {
    fontSize: 16,
    lineHeight: 22,
    textTransform: 'capitalize'
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 16,
    color: subtext
  }
})
