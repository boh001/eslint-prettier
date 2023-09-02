module.exports = {
  extends: [
    "eslint:recommended",
  ],
  plugins: ["import"],

  rules: {
    "no-implicit-coercion": "error",
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
