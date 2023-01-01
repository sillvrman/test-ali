module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        '@react-native-community',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['simple-import-sort', 'import', '@typescript-eslint', 'unused-imports'],
    rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react-native/no-inline-styles': 0,
        'prettier/prettier': 0,
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                'allowSingleExtends': false,
            },
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'react/no-unescaped-entities': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports-ts': 2,
        '@typescript-eslint/no-explicit-any': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
            },
        },
    ],
};
