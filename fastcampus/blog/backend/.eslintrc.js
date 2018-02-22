module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-console": 0,
    'no-unused-vars': 'off',

    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'camelcase': 'off', // 데이터베이스의 값을 받아올것이기 때문에 카멜케이스와 스네이크케이스 동시 이용할 예정 

    "chai-expect/missing-assertion": 2,
    "chai-expect/terminating-properties": 1

  },
  "plugins": [
    "chai-expect"
  ]
};