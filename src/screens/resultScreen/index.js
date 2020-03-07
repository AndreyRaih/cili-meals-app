import React from 'react';
import { View, StyleSheet } from 'react-native';

import RecieptCard from '@components/reciept/card';
import RecieptImage from '@components/reciept/image';
import RecieptDescription from '@components/reciept/description'
import Badge from '@components/badge';
import AnimationWrapper from '@components/animationWrapper';

import { inject, observer } from 'mobx-react';

function ResultScreen ({ store }) {
  const { currentReciept, isRecieptCardExtented } = store;
  function renderBadges () {
    const badgesView = (
      <AnimationWrapper delay={200} style={styles.descriptionsBadgesContainer}>
        <Badge style={styles.descriptionBadge} text={currentReciept.basicInfo.cousine} isPrimary />
        <Badge style={styles.descriptionBadge} text={currentReciept.basicInfo.type} />
        {currentReciept.basicInfo.amount && <Badge style={styles.descriptionBadge} icon="ios-timer" text={currentReciept.basicInfo.amount} />}
      </AnimationWrapper> 
    );
    if (isRecieptCardExtented) return badgesView;
  }
  return (
    <View>
      <RecieptImage source={currentReciept.image}>
        <RecieptDescription />
        {renderBadges()}
      </RecieptImage>
      <View style={styles.recieptCardContainer}>
        <RecieptCard />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  recieptCardContainer: { flex: 1, justifyContent: 'flex-end'},
  descriptionsBadgesContainer: {flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginHorizontal: 20},
  descriptionBadge: { marginRight: 8 }
});

export default inject('store')(observer(ResultScreen));
