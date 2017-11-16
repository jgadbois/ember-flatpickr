module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended'
  ],
  env: {
    browser: true
  },
  plugins: [
    'ember'
  ],
  globals: {
    flatpickr: false
  },
  rules: {
    'no-console': 0,
    'ember/no-old-shims': 'error'
  }
};
