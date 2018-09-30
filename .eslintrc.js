module.exports = {
    extends: 'airbnb',
    rules: {
        // 'camelcase': 0,
        'prefer-destructuring': 0,
        'indent': ['error', 4],
        'max-len': 0,
        // 'new-cap': 0,
        // 'newline-per-chained-call': 0,
        'no-console': 0,
        // 'no-multi-spaces': 0,
        // 'no-param-reassign': 0,
        'prefer-template': 0,
        // 'no-plusplus': 0,
        // 'no-unused-expressions': 0,
        // 'no-use-before-define': 0,
        'semi': 0,
        'semi-style': ['error', 'first'],

        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prefer-stateless-function': 0,
    },
    globals: {
        __MODE__: '',
        document: {},
        window: {},
    }
}
