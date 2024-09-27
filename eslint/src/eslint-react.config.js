import { FlatCompat } from '@eslint/eslintrc'
import a11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactCompiler from 'eslint-plugin-react-compiler'
import testingPlugin from 'eslint-plugin-testing-library'
import globals from 'globals'
import baseConfig from './eslint-base.config.js'

const compat = new FlatCompat()

const react = [
  reactPlugin.configs.flat['recommended'],
  reactPlugin.configs.flat['jsx-runtime'],
  ...compat.extends('plugin:react-hooks/recommended'),
  {
    languageOptions: {
      globals: {
        ...globals['browser'],
      },
    },
    plugins: {
      'react-compiler': reactCompiler,
    },
    rules: {
      'react-compiler/react-compiler': 'error',
      'react/display-name': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]

const a11y = [a11yPlugin.flatConfigs['recommended'], { rules: { 'jsx-a11y/heading-has-content': 'off' } }]

const testingLibrary = [
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    ...testingPlugin.configs['flat/react'],
  },
]

export default [...baseConfig, ...react, ...a11y, ...testingLibrary]
