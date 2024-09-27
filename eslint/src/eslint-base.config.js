import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import { root } from '@sportall/workspaces-config'
import jestPlugin from 'eslint-plugin-jest'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import promisePlugin from 'eslint-plugin-promise'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat()

const ignores = [
  {
    ignores: ['**/.*', '**/build', '**/dist', '**/generated'],
  },
]

const node = [
  {
    ignores: ['**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals['nodeBuiltin'],
        ...globals['es2025'],
      },
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals['node'],
        ...globals['es2025'],
      },
    },
  },
]

const javascript = [
  eslint.configs.recommended,
  {
    rules: {
      eqeqeq: ['error', 'always'],
      'guard-for-in': 'error',
      'jsdoc/require-jsdoc': 'off',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-debugger': 'warn',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-eval': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'promise/always-return': 'off',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      radix: 'error',
      'spaced-comment': ['warn', 'always', { markers: ['/'], exceptions: ['*'], block: { balanced: true } }],
    },
  },
]

const typescript = [
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: root,
      },
    },
    rules: {
      '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { arguments: false, attributes: false } },
      ],
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      'require-await': 'off',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/unified-signatures': 'error',
    },
  },
  {
    files: ['**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    ...tseslint.configs.disableTypeChecked,
  },
]

const jest = [
  jestPlugin.configs['flat/recommended'],
  jestPlugin.configs['flat/style'],
  {
    rules: {
      'jest/no-commented-out-tests': 'off',
      'jest/no-disabled-tests': 'off',
      'no-sparse-arrays': 'off',
    },
  },
]

const prettier = [
  prettierPlugin,
  {
    rules: {
      'prettier/prettier': 'warn',
    },
  },
]

const promise = [promisePlugin.configs['flat/recommended']]

const turbo = compat.extends('plugin:turbo/recommended')

export default tseslint.config(
  ...ignores,
  ...node,
  ...javascript,
  ...typescript,
  ...jest,
  ...prettier,
  ...promise,
  ...turbo,
)
