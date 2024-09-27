import baseConfig from './src/eslint-base.config.js'

export default [
  ...baseConfig,
  {
    rules: {
      '@typescript-eslint/dot-notation': 'off',
    },
  },
]
