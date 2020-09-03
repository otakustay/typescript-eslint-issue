module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
      'react',
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'no-undef': 'error',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
    }
};
