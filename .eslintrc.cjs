// 要以 .cjs 结尾，告知此文件遵循commonJs模块规范
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    parser: "@typescript-eslint/parser"
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/ban-ts-comment": ["off"],
    "@typescript-eslint/ban-types": ["off"],
    "no-with": 2, // 禁用with
    "no-unreachable": 2, // 不能有无法执行的代码
    "no-unused-expressions": 2, //禁止无用的表达式
    "@typescript-eslint/no-unused-vars": [2, { vars: "all", args: "after-used" }], //不能有声明后未被使用的变量或参数
    "no-use-before-define": 2, //未定义前不能使用
    "no-spaced-func": "off", // 函数名与括号之间允许有空格
    "no-param-reassign": 2, // 禁止给参数重新赋值
    "no-mixed-requires": [2, false], // 声明时不能混用声明类型
    "no-mixed-spaces-and-tabs": [2, false], // 禁止混用tab和空格
    "no-multi-spaces": 2, //不能用多余的空格
    "no-multi-str": 2, //字符串不能用\换行
    "no-multiple-empty-lines": [2, { max: 2 }], // 空行最多不能超过2行
    "no-func-assign": 2, // 禁止重复的函数声明
    "no-empty": 2, // 块语句中的内容不能为空
    "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2, // 函数参数不能重复
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    indent: [2, 2, { SwitchCase: 1 }], // 强制使用一致的缩进
    eqeqeq: [2, "always"], // 要求使用 === 和 !==
    semi: [2, "always"], // 要求或禁止使用分号代替 ASI
    quotes: [2, "double"], // 强制使用一致的反勾号、双引号或单引号
    "brace-style": [2, "1tbs", { allowSingleLine: true }], // if while function 后面的{必须与if在同一行。
    "space-before-function-paren": [0, "always"], // 函数定义时括号前面要不要有空格
    "semi-spacing": [0, { before: false, after: true }], //分号前后空格
    "prefer-const": 2, //首选const
    "padded-blocks": 0, //块语句内行首行尾是否要空行
    "max-params": [2, 5], //函数最多只能有5个参数
    "key-spacing": [0, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
    "lines-around-comment": 0, //行前/行后备注
    "max-depth": [2, 5], //嵌套块深度
    "max-len": [2, 120], // 每行代码最大长度
    "max-nested-callbacks": [2, 5], //回调嵌套深度
    "dot-location": 0, //对象访问符的位置，换行的时候在行首还是行尾
    "dot-notation": [0, { allowKeywords: true }], //避免不必要的方括号
    "eol-last": 0, //文件以单一的换行符结束
    "comma-dangle": [2, "never"], // 对象字面量项尾不能有逗号
    "comma-spacing": 0, //逗号前后的空格
    "comma-style": [2, "last"], //逗号风格，换行时在行首还是行尾
    complexity: [2, 11], //循环复杂度
    "linebreak-style": [0, "windows"], //换行风格
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always 参数：[ 之前和 ] 之后必须带空格
    // "array-bracket-spacing": [2, "always"],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    "computed-property-spacing": [2, "never"], // if else while for do后面的代码块是否需要{ }包围，参数：
    curly: [2, "all"],
    "max-lines": [2, 1500], // 限制一个文件最多的行数
    "max-lines-per-function": [2, 100], // 限制函数块中的代码行数
    "vue/component-definition-name-casing": [2, "PascalCase"], // 组件的 name 属性必须符合 PascalCase
    "vue/component-name-in-template-casing": [2, "kebab-case"], // 限制组件名的风格
    "vue/match-component-file-name": 2, // 组件名称必须和文件名一致
    "no-dupe-class-members": 2, //禁止重复定义类的成员
    "@typescript-eslint/no-non-null-assertion": "off",
    "vue/multi-word-component-names": [
      "warn",
      {
        ignores: ["index", "403", "404", "500"] // 添加组件命名忽略规则, 需要忽略的组件名
      }
    ],
    "vue/max-attributes-per-line": "off" // 有多个属性时，不需要重起一行显示属性
  }
};
