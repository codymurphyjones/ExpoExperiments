const { withExpo } = require('@expo/next-adapter');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css')


module.exports = withExpo(withCSS(withFonts(withImages({
    projectRoot: __dirname
}))));



