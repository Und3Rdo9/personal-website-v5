const path = require('path');

module.exports = ({ config }) => {
  // hack because the storybook 5.x webpack config includes
  // a loader to handle SVGs and web fonts
  // we want to use our own loaders instead
  const storyBookFileLoaderRule = config.module.rules.find(x =>
    x.test.toString().includes('svg'),
  );
  storyBookFileLoaderRule.test = new RegExp(
    storyBookFileLoaderRule.test
      .toString()
      .replace('svg|', '')
      .replace('eot|otf|', '')
      .replace('ttf|woff|woff2|', ''),
  );

  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: { parser: 'typescript' },
        },
      ],
    },
    {
      test: /\.(ttf|eot|woff|woff2)$/,
      include: [path.resolve(__dirname, '../src')],
      use: {
        loader: require.resolve('file-loader'),

        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
