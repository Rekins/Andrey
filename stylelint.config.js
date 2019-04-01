module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    'stylelint-config-css-modules',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'block-no-empty': null,
  },
}
