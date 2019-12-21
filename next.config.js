const path = require('path');
const Dotenv = require('dotenv-webpack');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withImage = require('next-images');

require('dotenv').config();

module.exports = withBundleAnalyzer(
  withImage({
    webpack: config => {
      config.plugins = config.plugins || [];
      config.plugins = [
        ...config.plugins,
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ];
      return config;
    },
  }),
);
