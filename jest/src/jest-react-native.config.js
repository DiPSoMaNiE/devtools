import baseConfig from './jest-base.config.js'

export default {
  ...baseConfig,
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
}
