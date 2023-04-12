module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    camelcase: 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'no-useless-constructor': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'error',
      {
        ignoreDeclarationMerge: true
      }
    ],
    '@typescript-eslint/ban-types': 'off'
  }
}
