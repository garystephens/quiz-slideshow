/* global module */

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 9,
        ecmaFeatures: {
            jsx: true,
        },
    },
    globals: {
        $: 'readonly',
        gtag: 'readonly',
    },
    rules: {
        'no-undef': 'error',
    },
};
