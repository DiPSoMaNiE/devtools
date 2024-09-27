import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import baseConfig from './jest-base.config.js'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default {
  ...baseConfig,
  setupFilesAfterEnv: [join(__dirname, 'jest-jsdom.setup.cjs')],
  testEnvironment: 'jsdom',
}
