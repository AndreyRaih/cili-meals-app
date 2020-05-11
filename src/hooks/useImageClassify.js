import * as ImageManipulator from 'expo-image-manipulator';
import foodNamesList from '@res/food-names-list.json';
import { request } from '@utils/request';

import { GOOGLE_VISION_API_KEY } from 'react-native-dotenv';

function _makeFoodNames (responseList) {
  const filteredList = []
  responseList.forEach(item => {
    if (item) {
      const hasEntity = foodNamesList.some(listItem => new RegExp(item.toLowerCase(), 'g').test(listItem));
      if (hasEntity) filteredList.push(item);
    }
  });
  return filteredList;
};

function _prepareResponse (response) {
  return new Promise((resolve, reject) => {
    if (response) {
      const { labelAnnotations, webDetection } = response;
      const preparedLabelAnnotations = labelAnnotations.filter(item => item.score > 0.25).map(label => label.description);
      const preparedWebDetection = webDetection.webEntities.filter(item => item.score > 0.25).map(entity => entity.description);
      const finallyList = new Set(preparedLabelAnnotations.concat(preparedWebDetection));
      return resolve(finallyList);
    } else {
      return reject(new Error('error in response'));
    }
  });
};

export async function useImageClassify (uri) {
  try {
    const { base64: rawImg } = await ImageManipulator.manipulateAsync(uri, [{resize: {height: 640, width: 480}}], {compress: 0.8, base64: true});
    const data = {
      requests: [
        {
          features: [
            { type: "LABEL_DETECTION", maxResults: 50 },
            { type: "WEB_DETECTION", maxResults: 50 }
          ],
          image: {
            content: rawImg
          }
        }
      ]
    };
    const classifyResult = await request({
      method: 'POST',
      url: 'https://vision.googleapis.com/v1/images:annotate',
      params: {
        key: GOOGLE_VISION_API_KEY
      },
      data
    });
    const classifyWordsList = classifyResult && classifyResult.responses && classifyResult.responses.length ? await _prepareResponse(classifyResult.responses[0]) : [];
    return _makeFoodNames(classifyWordsList);
  } catch (error) {
    console.log(error);
  }
};
