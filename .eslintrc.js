module.exports = {
    extends: 'airbnb',
    rules: {
        'camelcase': 0,
        'prefer-destructuring': 0,
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'max-len': 0,
        // 'new-cap': 0,
        // 'newline-per-chained-call': 0,
        'no-console': 0,
        // 'no-multi-spaces': 0,
        // 'no-param-reassign': 0,
        'no-underscore-dangle': 0,
        'prefer-template': 0,
        // 'no-plusplus': 0,
        // 'no-unused-expressions': 0,
        // 'no-use-before-define': 0,
        'semi': 0,
        'semi-style': ['error', 'first'],

        'react/forbid-prop-types': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prefer-stateless-function': 0,
    },
    globals: {
        __APP_VERSION__: true,
        __MODE__: '',
        document: {},
        window: {},
    }
}
