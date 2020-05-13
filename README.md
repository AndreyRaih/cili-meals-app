# Cili App [MVP]
Cili App - is a my pet project app, based on React Native.

It's just one of the ideas of usage Google Cloud Vision API in the usual lifestyle. As for me, I really like the Asian kitchen, and some time ago I resolved, that the smart camera-oriented app with AI recognition of ingredients, which you have at the moment - can be a perfect and useful idea. All that you should do - this is a make a photo of some products, wait for a few moments and get three meals recipes of Asian kitchen.

## How does it work?

At first, [Google Cloud Vision API](https://cloud.google.com/vision) recognize objects on the photo, and after this array from the request's response filtered, so left only food names.  

After this, App makes a request to [Spoonacular API](https://spoonacular.com/food-api), and get the three recipes of meals.

## WIP
Now, it's just a prototype, and I try to make it useful and convenient. What about technical descriptions - it will appear in the last stages of making this project


### Contribute Guide
Install **npm** or **yarn**
After this, use install command, for installing dependencies:

    npm install
   or
   

    yarn
   After installing, just run your app:
   

    yarn start

More information about this build, you can get on [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)
