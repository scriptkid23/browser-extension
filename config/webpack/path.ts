import path from 'path';

export const paths = {
  root: path.resolve(__dirname, '../..'),
  src: path.resolve(__dirname, '../../src'),
  dist: path.resolve(__dirname, '../../dist'),
  public: path.resolve(__dirname, '../../public'),
  config: path.resolve(__dirname, '..'),
} as const;

export const aliases = {
  '@': paths.src,
  '@shared': path.resolve(paths.src, 'shared'),
  '@domain': path.resolve(paths.src, 'domain'),
  '@application': path.resolve(paths.src, 'application'),
  '@infrastructure': path.resolve(paths.src, 'infrastructure'),
  '@presentation': path.resolve(paths.src, 'presentation'),
} as const;

