import React, { useState, useEffect } from 'react';
import { View, Vibration, Text } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import { inject } from 'mobx-react';

import { useImageClassify } from '@hooks/useImageClassify';
import { useMakeRecipes } from '@hooks/useMakeRecipes';

function RecognizeLoaderScreen ({ route, store, navigation }) {
  const { photo } = route.params;
  const [loadingState, setLoadingState] = useState(false);
  const [completeState, setCompleteState] = useState(false);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => { startRecognize(photo) }, []);

  async function startRecognize (photo) {
    setLoadingState(false);
    setCompleteState(false);
    setLoadingState(true);
    const predictions = await useImageClassify(photo.uri);
    setLoadingState(false);
    endRecognize(predictions);
  }

  async function endRecognize (predictions) {
    Vibration.vibrate();
    const recipes = await useMakeRecipes(predictions);
    if (recipes.length) {
      setCompleteState(true);
      store.addRecipesList(recipes);
      store.setCurrentRecipe(recipes[0].id);
      setTimeout(() => {
        setCompleteState(false);
        navigation.navigate('Result');
      }, 1500);
    } else {
      setNoResult(true);
      setTimeout(() => {
        setNoResult(false);
        navigation.navigate('Camera');
      }, 3000);
    }
  }
  function renderLoaderView () {
    if (!noResult) {
      return (
        <>
          <AnimatedLoader
            visible={completeState}
            overlayColor="rgba(0, 0, 0, 0.83)"
            source={require("@res/loaders/complete-loader.json")}
            animationStyle={{ width: 200, height: 200 }}
            speed={1}
          />
          <AnimatedLoader
            visible={loadingState}
            overlayColor="rgba(0, 0, 0, 0.83)"
            source={require("@res/loaders/process-loader.json")}
            animationStyle={{ width: 200, height: 200 }}
            speed={1}
          />
        </>
      )
    } else {
      return (
        <View style={{flex: 2, backgroundColor: 'rgba(0, 0, 0, 0.83)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><Text style={{color: 'white', fontSize: 24}}>Sorry, try again, please</Text></View>
      )
    }
  }
  return (
    <View style={{ flex: 1, zIndex: 0 }}>
      {renderLoaderView()}
    </View>
  )
}

export default inject('store')(RecognizeLoaderScreen);