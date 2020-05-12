module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["react-app", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "es5",
        semi: false,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: true,
      },
    ],
  },
};
