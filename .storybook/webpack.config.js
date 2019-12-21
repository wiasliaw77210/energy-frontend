module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('next/babel')],
            plugins: [['styled-components', { ssr: true }]],
          },
        },
        require.resolve('react-docgen-typescript-loader'),
      ],
    },
    {
      test: /\.stories\.tsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    },
  );

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
