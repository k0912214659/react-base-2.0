module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'react',
    'import',
  ],
  extends: [
    'airbnb',
    'eslint-config-airbnb',
  ],
  rules: {
    'indent': 'off',
    'max-len' : ['error', {code : 350 }],
    'semi': ['error'],
    'camelcase': 'off',
    'prefer-destructuring': 'off',
    'global-require': 'off',
    'prefer-template': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/control-has-associated-label': 'off',
    'import/named': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': [2, { ignore: ['\.png$'] }],
    'import/no-dynamic-require': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': 'off',
  },
  settings: {
    "import/resolver": {
      "alias": {
        "map": [
          ["@Base", "./src/base"],
          ["@Components", "./src/components"],
          ["@Reducers", "./src/reducers"],
          ["@API", "./src/api"],
          ["@Tools", "./src/tools"],
          ["@Hooks", "./src/hooks"],
          ["@Models", "./src/models"],
          ["@CSS", "./src/css"],
          ["@Services", "./src/services"],
          ["@Providers", "./src/providers"],
        ],
        "extensions": [".js", ".jsx", ".json"]
      }
    }
  },
  env: {
    "browser": true,
  },
};
