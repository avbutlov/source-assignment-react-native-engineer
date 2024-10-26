module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
