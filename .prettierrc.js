module.exports = {
  singleQuote: true,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBraketSameLine: false,
  printWidth: 120,
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      options: {
        parser: "babel-flow",
      },
    },
  ],
};
