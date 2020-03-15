import React, { useState, useEffect } from 'react';
import { View, Vibration } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import { inject } from 'mobx-react';

import { useImageClassify } from '@hooks/useImageClassify';
import { useMakeRecipes } from '@hooks/useMakeRecipes';

function RecognizeLoaderScreen ({ route, store, navigation }) {
  const { photo } = route.params;
  const [loadingState, setLoadingState] = useState(false);
  const [completeState, setCompleteState] = useState(false);

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
    setCompleteState(true);
    const recipes = await useMakeRecipes(predictions);
    store.addRecipesList(recipes);
    store.setCurrentRecipe(recipes[0].id);
    setTimeout(() => {
      setCompleteState(false);
      navigation.navigate('Result');
    }, 1500);
  }

  return (
    <View style={{ flex: 1, zIndex: 0 }}>
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
    </View>
  )
}

export default inject('store')(RecognizeLoaderScreen);