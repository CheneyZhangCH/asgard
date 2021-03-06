module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  semi: false,
  trailingComma: 'all',
  printWidth: 100,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
}
