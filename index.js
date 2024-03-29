const INDENTATION = 4;

module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks'
    ],
    env: {
        browser: true
    },
    globals: {
        __: false,
        Ext: false,
        i18n: false,
        md5: false,
        Phoenix: false,
        APP_BASE_URL: false,
        APP_URL: false,
        phoenix: false,
        phAppHelper: false,
        APP_CONFIG: false,
        APP_DEFAULT: false,
        WEB_HELP_DEFAULT_URL: false,
        LOCALE_CURRENT: false,
        LOCALE_DATA: false,
        __APP_VERSION__: false,
        __ENABLE_RECORD_POINTER__: false,
        __DEV__: false,
        crosstab: false,
        Clipboard: false,
        karma: false,
        _: false,
        IBAN: false
    },
    rules: {
        'comma-dangle': ['error', 'never'],
        'func-names': ['error', 'never'],
        'no-console': [
            'error',
            {
                allow: [
                    'warn',
                    'error'
                ]
            }
        ],
        eqeqeq: 'warn',
        'no-var': 'off',
        'object-shorthand': 'off',
        'prefer-rest-params': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-template': 'off',
        'one-var': 'off',
        'prefer-destructuring': 'off',
        'space-before-function-paren': 'off',
        'quote-props': 'error',
        indent: ['error', INDENTATION],
        'max-len': 'off',
        'prefer-spread': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false
            }
        ],
        'no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^(event|e|props)$'
            }
        ],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': [
            'warn',
            'never',
            {
                css: 'always',
                scss: 'always'
            }
        ],
        'react/jsx-indent': ['error', INDENTATION],
        'react/jsx-indent-props': ['error', INDENTATION],
        'react/sort-comp': 'off',
        'react/no-unused-prop-types': 'warn',
        'react/no-unused-state': 'warn',
        'react/prop-types': 'off',
        'react/destructuring-assignment': ['warn', 'always'],
        'react/jsx-props-no-spreading': 'off'
    }
};
