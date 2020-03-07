module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
          'module-resolver',
          {
              alias: {
                '@components': ['./src/components'],
                '@assets': ['./assets'],
                '@hooks': ['./src/hooks'],
                '@screens': ['./src/screens'],
                '@res': ['./src/res'],
                '@utils': ['./src/utils']
              },
          },
      ],
      [
        "@babel/plugin-proposal-decorators",
        {
           "legacy": true
        }
     ]
    ],
  };
};
