/* eslint-disable no-bitwise */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': ['off' | 'warn' | 'error', { target: 'any' }],
    'linebreak-style': 0,
    'prettier/prettier': 'error',
  },
};
