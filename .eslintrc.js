module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": ["error", "unix"],  // Исправляет ошибку с различиями в переводах строк между ОС
    "no-plusplus": "off",  // Отключает правило запрета использования ++ и --
    "prefer-const": "error",  // Обязательное использование const для неизменяемых переменных
    "no-param-reassign": ["error", { "props": false }],  // Отключение запрета на переназначение параметров функции
    "no-restricted-properties": [
      "error",
      {
        "object": "Math",
        "property": "pow",
        "message": "Use the exponentiation operator (**) instead."
      }
    ],
    "no-else-return": "error",  // Убирает else, если перед ним есть return
    "operator-linebreak": ["error", "before"],  // Оператор должен находиться перед переносом строки
    "comma-dangle": ["error", "always-multiline"],  // Запрет на отсутствие запятой в многострочных объектах и массивах
  },
};
