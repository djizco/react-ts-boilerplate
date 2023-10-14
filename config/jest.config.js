const path = require('path');

module.exports = {
  collectCoverageFrom: [
    'client/components/**/*.{js,jsx,ts,tsx}',
    'client/store/actions/**/*.{js,jsx,ts,tsx}',
    'client/store/reducers/**/*.{js,jsx,ts,tsx}',
    'client/utils/**/*.{js,jsx,ts,tsx}',
    '!client/**/*.d.ts',
    '!client/components/environment/**/*.{js,jsx,ts,tsx}',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^_client(.*)$': '<rootDir>/client/$1',
    '^_components(.*)$': '<rootDir>/client/components/$1',
    '^_store(.*)$': '<rootDir>/client/store/$1',
    '^_styles(.*)$': '<rootDir>/client/styles/$1',
    '^_hooks(.*)$': '<rootDir>/client/hooks/$1',
    '^_utils(.*)$': '<rootDir>/client/utils/$1',
    '^_types(.*)$': '<rootDir>/client/types/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  rootDir: path.join(__dirname, '..'),
  setupFilesAfterEnv: [
    '<rootDir>/config/jest.setup.js',
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/client/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    // eslint-disable-next-line
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/assetsTransformer.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
