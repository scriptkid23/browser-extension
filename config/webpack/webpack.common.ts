import path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  entry: {
    background: './src/infrastructure/background/background.ts',
    content: './src/infrastructure/content/content.ts',
    popup: './src/presentation/popup/popup.tsx',
    options: './src/presentation/options/options.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../../src'),
      '@shared': path.resolve(__dirname, '../../src/shared'),
      '@domain': path.resolve(__dirname, '../../src/domain'),
      '@application': path.resolve(__dirname, '../../src/application'),
      '@infrastructure': path.resolve(__dirname, '../../src/infrastructure'),
      '@presentation': path.resolve(__dirname, '../../src/presentation'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/icons',
          to: 'icons',
        },
        {
          from: 'manifest.json',
          to: 'manifest.json',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/presentation/popup/popup.html',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new HtmlWebpackPlugin({
      template: './src/presentation/options/options.html',
      filename: 'options.html',
      chunks: ['options'],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

export default config;
