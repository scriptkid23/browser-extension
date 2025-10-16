import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import TerserPlugin from 'terser-webpack-plugin';

const config: Configuration = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});

export default config;
