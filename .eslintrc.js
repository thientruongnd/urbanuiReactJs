/**
Mr : Dang Xuan Truong
Email: truongdx@runsystem.net
*/
/**
 * "off" or 0 - turn the rule off
 * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
 * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 * */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
    ],
    rules: {
        semi: 1,
        quotes: [2, 'single'],
        indent: [1, 4],
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            mjs: 'never',
            '': 'never',
        }],
        'react/no-unused-state': 0,
        'no-tabs': 0,
        'no-unused-vars': 0,
        'no-mixed-spaces-and-tabs': 0,
        'react/no-access-state-in-setstate': 0,
        'import/no-unresolved': 0,
        'react/prop-types': 2,
        'react/jsx-max-props-per-line': 1,
        'lineBreak-style': 0,
        'import/no-extraneous-dependencies': 0,
        'class-methods-use-this': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/require-default-props': 0,
        'react/no-array-index-key': 0,
        'react/jsx-indent-props': 0,
        'react/jsx-indent': 0,
        'react/prefer-stateless-function': 0,
        'max-len': [1, { code: 120, tabWidth: 4 }],
        'react/forbid-prop-types': 0,
        'import/prefer-default-export': 0,
        'react/no-unused-prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'import/no-cycle': 0,
        'react/destructuring-assignment': 0,
        'jsx-a11y/anchor-is-valid': ['error', {
            components: ['Link'],
            specialLink: ['to'],
        }],
        'no-script-url': 0,

    },
};
