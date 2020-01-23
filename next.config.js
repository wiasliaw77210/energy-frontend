const Dotenv = require('dotenv-webpack');
const withImages = require('next-images');
require('dotenv').config();

const publicRuntimeConfig = {
  MAIN_HOST: process.env.MAIN_HOST,
};

module.exports = withImages({
  webpack: function(config) {
    config.plugins = [...config.plugins, new Dotenv({ systemvars: true })];
    return config;
  },
  publicRuntimeConfig,
});
