/**
 * Lint-staged configuration to run linters each time a commit is made.
 */
export default {
  // run eslint (expect for .*.js config files to avoid eslint warnings)
  '!(.)*.{js,cjs,mjs,jsx,ts,tsx}': ['eslint --fix'],
  // run prettier for all supported files
  '*.{css,scss,graphql,hbs,html,json,js,cjs,mjs,jsx,md,mdx,prisma,ts,tsx,yaml,yml}': ['prettier --write'],
}
