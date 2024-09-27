import { createRequire } from 'node:module'
import next from './jest-next.config.js'
import reactNative from './jest-react-native.config.js'
import react from './jest-react.config.js'
import swcConfig from './jest-swc.config.js'

export default swcConfig

const configs = {
  next,
  react,
  'react-native': reactNative,
  'ts-config': swcConfig,
}

export const createJestConfig = async ({ url }) => {
  const require = createRequire(url)

  try {
    const tsConfig = require('./tsconfig.json')
    const type = tsConfig.extends.split('/').at(-1) || 'ts-config'

    return withModuleNameMapper(tsConfig)(configs[type])
  } catch (cause) {
    console.error('Autoconfiguration failed', { cause })
    process.exit(1)
  }
}

/**
 * Provides a function to add custom `compilerOptions.paths` of tsconfig.json to jest `moduleNameMapper`
 * @param tsConfig tsconfig as json
 */
const withModuleNameMapper = (tsConfig) => async (config) => {
  const paths = tsConfig.compilerOptions?.paths ?? {}
  const configObj = typeof config === 'function' ? await config() : config
  if (!configObj.moduleNameMapper) {
    configObj.moduleNameMapper = {}
  }

  Object.entries(paths).forEach(([key, [value]]) => {
    configObj.moduleNameMapper[key.replace('*', '(.*)')] = `<rootDir>${value.replace('*', '$1')}`
  })

  return configObj
}
