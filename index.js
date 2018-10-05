module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
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
    'no-console': 'warn',
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
    'max-len': [2, 120, 4],
    'prefer-spread': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false
      }
    ]
  }
};
