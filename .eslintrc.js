require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@vue/eslint-config-airbnb-with-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-param-reassign': 0,

    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,

    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 0,

    'vuejs-accessibility/click-events-have-key-events': 0,
    'vuejs-accessibility/label-has-for': 0,
  },
};
