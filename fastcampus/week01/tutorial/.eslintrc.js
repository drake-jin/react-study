module.exports = {
    "extends": "airbnb",
    'rules': {
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],

        'class-methods-use-this': 'off',

        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',

        'arrow-body-style': 'off',
        'arrow-parens': 'off',

        'no-caller': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-escape': 'off',
        'no-prototype-builtins': 'off',
        'no-param-reassign': 'off',
        'no-restricted-properties': 'off',
        'no-console': 'off',

        "class-mothods-use-this": 'off',
        "react/jsx-filename-extension": 'off',
        'jsx-ally/href-no-hash': 'off',

        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off'
    },
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module',
    },

};