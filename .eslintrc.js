module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "linebreak-style": 0,
    "indent": ["error", "tab"],
    // "max-len": [2, 200, 4, {"ignoreUrls": true}],
    "no-tabs": 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}