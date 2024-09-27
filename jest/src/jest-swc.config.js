import baseConfig from './jest-base.config.js'

export default {
  ...baseConfig,
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
}
