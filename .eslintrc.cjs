module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
    // project: true,
  },
  plugins: ["prettier"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "prettier/prettier": ["error", { trailingComma: "none" }],
    "comma-dangle": "off"
  }
};
