// @generated: @expo/next-adapter@2.0.0-beta.7
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps
/*
console.log(process.argv[process.argv.length -2]);
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@expo/next-adapter/babel','babel-preset-expo', "module:react-native-dotenv"],
  };
};*/


module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};