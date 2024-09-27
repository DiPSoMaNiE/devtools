export default {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-prisma',
    'prettier-plugin-tailwindcss',
  ],
  tailwindAttributes: ['tw'],
  tailwindFunctions: ['classnames', 'classNames', 'cn'],
  overrides: [
    {
      files: ['tsconfig.json'],
      options: {
        trailingComma: 'none',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
  ],
}
