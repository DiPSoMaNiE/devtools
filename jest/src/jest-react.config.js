import baseConfig from './jest-jsdom.config.js'

export default {
  ...baseConfig,
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
