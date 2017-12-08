module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "airbnb-base"
  ],
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    "import/extensions": ["error", "always", {
      "js": "never",
      "vue": "never"
    }],
    "import/no-extraneous-dependencies": ["error", {
      "optionalDependencies": ["test/unit/index.js"]
    }],
    "no-unused-vars": 0,
    "global-require": 0,
    "comma-dangle": ["error", "never"],
    "object-property-newline": "warn",
    "object-shorthand": ["error", "methods"],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-param-reassign": 0,
    "prefer-const": "warn",
    "no-unused-expressions": 0,
    "no-lonely-if": 0,
    "no-underscore-dangle": 0,
    "func-names": 0,
    "max-len": ["error", 200, { "ignoreComments": true, "ignoreUrls": true, "ignoreStrings": true }],
    "camelcase": 'off',
    "no-continue": "off",
    "no-console": "off",
    "no-mixed-operators": "off",
    "no-bitwise": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
