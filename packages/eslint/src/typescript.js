module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "import", "prettier"],

  rules: {
    "prettier/prettier": "error",
    "no-implicit-coercion": "error",

    "no-undef": "off",

    indent: "off",
    "@typescript-eslint/indent": "off",
    semi: "off",

    "@typescript-eslint/no-non-null-assertion": "off",

    "no-extra-boolean-cast": "off",
    "getter-return": "off",

    "@typescript-eslint/explicit-function-return-type": "off",

    "@typescript-eslint/no-use-before-define": "off",

    "@typescript-eslint/no-empty-interface": "off",

    "@typescript-eslint/no-parameter-properties": "off",
    "no-async-promise-executor": "warn",
    "@typescript-eslint/prefer-as-const": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "private-static-field",
          "public-instance-field",
          "private-instance-field",
          "public-constructor",
          "private-constructor",
          "public-instance-method",
          "private-instance-method",
        ],
      },
    ],
    "no-warning-comments": "off",
    "prefer-const": "error",
    "no-var": "error",
    curly: ["error", "all"],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "import/no-duplicates": "error",
    "@typescript-eslint/no-var-requires": "error",
  },
};
