module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },
  extends: ["plugin:react/recommended"],
  plugins: ["react", "react-hooks"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-no-target-blank": "error",
    "react/react-in-jsx-scope": "off",
  },
};
