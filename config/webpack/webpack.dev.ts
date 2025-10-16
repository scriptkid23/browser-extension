import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
});

export default config;
