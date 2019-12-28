// @generated: @expo/next-adapter@2.0.0-beta.7
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = { 
    presets: ['@expo/next-adapter/babel','next/babel'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@Components/*": './src/components/*',
            "@Features/*": './src/features/*',
            "@with/*": './src/with/*',
            "@utils/*": './src/utils/*',
          },
        },
      ]]
};
