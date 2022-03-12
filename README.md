# Cili App [MVP]
Cili App - is a small camera-app, powered by React Native and Google Cloud Vision API.

It's just one of the options of usage Google Cloud Vision API in daily routine. Especially, if you're big fan of Panasian kitchen. All that you need to do is a make photo of products which you have, waiting just a moment and you'll get few simple recipes.

## How does it work?

At first, [Google Cloud Vision API](https://cloud.google.com/vision) recognizes objects on the photo, then array from response filtered in order to keep only food names.  

Next, App makes a request to [Spoonacular API](https://spoonacular.com/food-api) for getting 3 recipes based on products from previous step.

### Contribute Guide
Install **npm** or **yarn**
After this, use install command, for installing dependencies:

    npm install
   or
   

    yarn
   After installing, just run your app:
   

    yarn start

More information about this build, you can get on [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)