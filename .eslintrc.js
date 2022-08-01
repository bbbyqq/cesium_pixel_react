module.exports = {
  env: {
    browser: true,
    es2021: true,
    // eslint-plugin-vue v8.0.0以上
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ]
}
