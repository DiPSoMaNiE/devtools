import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import react from './eslint-react.config.js'

const compat = new FlatCompat()

const next = [
  { ignores: ['next-env.d.ts', 'public/**'] },
  ...compat.extends('plugin:@next/next/recommended'),
  ...compat.extends('plugin:@next/next/core-web-vitals'),
  {
    languageOptions: {
      globals: {
        ...globals['serviceworker'],
      },
    },
  },
]

export default [...react, ...next]
