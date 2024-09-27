/* eslint-disable turbo/no-undeclared-env-vars */

const isCi = process.env.CI === 'true'
const coverageDirectory = './.coverage'

export default {
  testRegex: '(?<=\\/src\\/).*\\.(test|spec)\\.[jt]s(x?)$',
  coverageDirectory,
  coverageReporters: ['text'],
  reporters: isCi ? [['github-actions', { silent: true }], 'summary'] : ['default'],
}
