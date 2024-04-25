// 要以 .cjs 结尾，告知此文件遵循commonJs模块规范
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }, parser: "@typescript-eslint/parser"
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    complexity: ["warn", { max: 10 }], // 代码复杂度
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }], // 引号类型 `` "" ''
    eqeqeq: [2, "always", { null: "ignore" }], // 必须使用全等
    "comma-dangle": ["error", "never"], // 对象字面量项尾不能有逗号
    "arrow-spacing": ["error", { before: true, after: true }], // 箭头函数前加空格
    "default-case": 2, // switch中一定使用default
    "no-alert": process.env.NODE_ENV !== "production" ? 0 : 2,     // 禁止使用alert confirm prompt
    "no-console": process.env.NODE_ENV !== "production" ? 0 : [1, { allow: ["warn", "error"] }], // 禁止使用console
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-with": 2, // error; 代码里面禁止使用 with 表达式
    "no-eval": 2, // error; 代码中不允许使用eval
    "no-trailing-spaces": 2, // 行末尾有空格
    "no-redeclare": 2, // 禁止重复声明变量
    "no-multi-spaces": "error", // 禁止在任何地方使用多个连续空格
    "no-undef": 2, // 不能有未定义的变量
    "no-use-before-define": 2, // 未定义前不能使用
    "comma-style": [2, "last"], // 如果逗号可以放在行首或行尾时，那么请放在行尾
    "no-label-var": 2, // 不允许标签与变量同名
    "no-lone-blocks": 2, // 禁用不必要的嵌套块
    "no-underscore-dangle": 2, // 标识符不能以_开头或结尾
    "no-mixed-spaces-and-tabs": 2, // 不允许空格和 tab 混合缩进
    "no-multiple-empty-lines": [2, { max: 1 }], // 不允许多个空行
    "no-cond-assign": 2, // 禁止条件表达式中出现赋值操作符
    "no-var": 2, // 不能用var
    "no-empty": 2, // 禁止使用空语句模块   if，switch，for，try，catch的{内没有内容}
    "no-await-in-loop": 2, // 禁止循环中出现await
    "no-unreachable": 2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    "block-scoped-var": 2, // 强制把变量的使用限制在其定义的作用域范围内
    "no-extra-label": 2, // 禁用不必要的标签
    "spaced-comment": 2, // 注释风格要不要有空格什么的
    "space-before-blocks": [2, "always"], // 块语句必须总是至少有一个前置空格
    "space-before-function-paren": 0, // 函数定义时括号前面要有空格
    "space-after-keywords": [0, "always"], // 关键字后面是否要空一格
    "space-infix-ops": [2, { int32Hint: true }], // 操作符周围的空格
    "comma-spacing": ["error", { before: false, after: true }], // 逗号前后的空格
    "key-spacing": ["error", { afterColon: true }],
    "space-unary-ops": [2, { words: true, nonwords: false }], // 一元运算符前后不要加空格
    "object-curly-spacing": ["error", "always"], // 花括号加空格
    "vue/require-default-prop": 2, // prop 需要默认的值
    "vue/singleline-html-element-content-newline": 0, // 标签</>前后不换行
    "vue/multi-word-component-names": 0,
    "vue-multiple-template-root": 0,
    "vue/eqeqeq": [2, "always", { null: "ignore" }],
    "vue/max-attributes-per-line": [0, { singleline: 1, multiline: { max: 1, allowFirstLine: false } }]
  }
};
