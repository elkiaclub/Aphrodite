module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
  ],
  parser: 'vue-eslint-parser',
  rules: {
    'indent': ['warn', 2],
    'vue/html-indent': ['warn', 2],
    'vue/max-attributes-per-line': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-prototype-builtins': 'off'
  },
}
