module.exports = {
  env: {
    jest: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "camelcase": 0,
    "no-var": 0,
    "prefer-arrow-callback": 0,
    "no-unused-vars": 0,
    "space-before-function-paren": 0,
    "func-names": 0,
    "no-multiple-empty-lines": 0

  },
};
