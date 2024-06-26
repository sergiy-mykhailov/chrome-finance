import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js';


export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/semi': 'error',
      '@stylistic/js/comma-dangle': ["error", "always-multiline"],
      '@stylistic/js/quotes': ["error", "single"],
      '@stylistic/js/max-len': [
        "error",
        {
          "code": 100,
          "tabWidth": 2,
          "ignoreComments": true,
          "ignoreTrailingComments": true,
          "ignoreStrings": true,
          "ignoreUrls": true,
          "ignoreTemplateLiterals": true,
          "ignoreRegExpLiterals": true,
        },
      ],
      '@stylistic/js/object-curly-spacing': ["error", "always"],
      '@stylistic/js/no-trailing-spaces': "error",
    },
  },
];
