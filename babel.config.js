// @generated: @expo/next-adapter@2.0.0-beta.7
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps
/*

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@expo/next-adapter/babel','babel-preset-expo', "module:react-native-dotenv"],
  };
};*/
const path = require('path');

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
	"plugins": [
      [require.resolve('babel-plugin-module-resolver'), {
		    "root": "./src",
        "alias": {
          "Components": "./src/components",
          "Screens": "./src/screens",
          "Features": "./src/features",
          "Utils": "./src/utils",
          "With": "./src/with"
        }
      }]
    ]
  };
};