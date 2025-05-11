// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs'
import vue from 'eslint-plugin-vue'
import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default withNuxt([
  {
    // JavaScript config
    ...js.configs.recommended
  },
  {
    // TypeScript config
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': ts
    },
    rules: {
      ...ts.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  },
  {
    // Vue config
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      vue
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/no-unused-components': 'warn',
      'vue/no-mutating-props': 'error'
    }
  },
  {
    // Global formatting rules
    rules: {
      // 'no-console': 'warn',
      'no-debugger': 'error',
      // 'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'comma-dangle': ['error', 'only-multiline'],
      'eqeqeq': ['error', 'always']
    }
  }
])
