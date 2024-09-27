import { createRequire } from 'node:module'
import baseConfig from './eslint-base.config.js'
import next from './eslint-next.config.js'
import reactNative from './eslint-react-native.config.js'
import react from './eslint-react.config.js'

export default baseConfig

const configs = {
  next,
  react,
  'react-native': reactNative,
  'ts-config': baseConfig,
}

export const createEslintConfig = ({ url }) => {
  const require = createRequire(url)

  try {
    const tsConfig = require('./tsconfig.json')
    const type = tsConfig.extends.split('/').at(-1) ?? 'ts-config'

    return configs[type]
  } catch (cause) {
    console.error('ESLint auto configuration failed', { cause })
    process.exit(1)
  }
}
