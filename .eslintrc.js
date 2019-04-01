module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    'no-use-before-define': ['error', { functions: false }],
    'no-bitwise': 'off',
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignone' } }],
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-mixed-operators': 'off',
    'no-confusing-arrow': 'off',
    'no-nested-ternary': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
