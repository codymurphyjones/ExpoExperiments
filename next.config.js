const { withExpo } = require('@expo/next-adapter');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css')
const moduleAlias = require('module-alias')
const path = require('path')

moduleAlias.addAliases({
    'hammerjs': '@egjs/hammerjs',
    "@Components": "./src/components/",
     "@Features": "./src/features/",
     "@with": "./src/with/",
    "@utils": "./src/utils/",

  })




module.exports = withCSS(withExpo(withFonts(withImages({
    webpack: (config, { dev }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@Components": path.resolve(__dirname, './src/components'),
            "@Features": path.resolve(__dirname, './src/features'),
            "@with": path.resolve(__dirname, './src/with'),
            "@utils": path.resolve(__dirname, './src/utils'),
          }
        return config;
    },
    projectRoot: __dirname,
   
}))));