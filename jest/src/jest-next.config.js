import nextJest from 'next/jest.js'
import baseConfig from './jest-jsdom.config.js'

const createJestConfig = nextJest()

export default createJestConfig(baseConfig)
