import { BuildOptions } from '../types/config';

export function buildBabelLoader({ isDev }: BuildOptions) {
  return {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [isDev && require.resolve('react-refresh/babel')].filter(
          Boolean,
        ),
      },
    },
  };
}
