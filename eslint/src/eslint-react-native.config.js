import { FlatCompat } from '@eslint/eslintrc'
import react from './eslint-react.config.js'

const compat = new FlatCompat()

const reactNative = [
  ...compat.extends('plugin:react-native/all'),
  {
    rules: {
      'react-native/sort-styles': 'off',
    },
  },
]

export default [...react, ...reactNative]
