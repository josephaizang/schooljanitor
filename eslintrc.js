module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:prettier-recommended'],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/camelcase': 'off',
        'react/prop-types': 'off',
        '@typescript-eslintno-unused-vars': 'off',
        'react/display-name': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}