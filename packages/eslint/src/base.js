module.exports = {
  extends: [
    'eslint-config-prettier',
    "eslint:recommended",
  ],
  plugins: ["import", 'prettier'],

  rules: {
    'prettier/prettier': 'error',
    "no-implicit-coercion": "off",
    "no-undef": "off",
    indent: "off",
    semi: "off",
    "no-extra-boolean-cast": "off",
    "getter-return": "off",
    "no-async-promise-executor": "warn",
    "no-warning-comments": "off",
    "prefer-const": "error",
    "no-var": "error",
    curly: ["error", "all"],
    eqeqeq: ["error", "always", { null: "ignore" }],
  },
};
