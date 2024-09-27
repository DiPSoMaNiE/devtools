import { RuleConfigSeverity } from '@commitlint/types'
import { root } from '@sportall/workspaces-config'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

const scopes = ['main', ...findScopes(root)]

/**
 * @type {import('@commitlint/types').QualifiedConfig}
 */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'scope-empty': [RuleConfigSeverity.Error, 'never'],
    'scope-enum': [RuleConfigSeverity.Error, 'always', scopes],
  },
}

/**
 * Scans workspace directories to extract available commitlint scopes.
 *
 * @param {string} source Source directory in which to look for scopes
 * @param {number} maxDepth max scope depth (e.g. for a max depth of 2, `path/to/package` becomes `to/package`)
 * @returns {string[]} Array of available scopes
 */
function findScopes(source, maxDepth = 2) {
  // list all directories within source
  const dirs = readdirSync(source, { withFileTypes: true }).filter(
    (file) => file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules',
  )
  return (
    []
      // add source directories to scopes
      .concat(...dirs.map((dir) => join(source, dir.name)))
      // recursively find other scopes within source's children
      .concat(
        ...dirs.map((dir) => {
          // list files within child directory
          const files = readdirSync(join(source, dir.name), {
            withFileTypes: true,
          })
          // if there is a package.json, stop here, we found a scope
          if (files.some((file) => file.name === 'package.json')) {
            return []
          }
          // otherwise continue to look up for more scopes in child directory
          return findScopes(join(source, dir.name), maxDepth)
        }),
      )
      // remove root dir path to keep scopes only
      .map((dir) => dir.replace(`${root}/`, ''))
      // limit scope to the given max segment maxDepth
      .map((scope) => {
        const segments = scope.split('/')
        return segments.length > maxDepth ? segments.slice(segments.length - maxDepth).join('/') : scope
      })
  )
}
