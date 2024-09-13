import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
  },
  { ignores: ['src-tauri', 'out', '.next'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },

  {
    rules: {
      semi: ['warn', 'never'],
      quotes: ['warn', 'single'],
      'no-var': 'warn',
      'prefer-const': 'error',
      'react/react-in-jsx-scope': 'off',
      '@stylistic/js/padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: 'function', next: '*' },
      ],
      'curly': ['error', 'multi-or-nest', 'consistent'],
    },
    languageOptions: {
      globals: {
        module: false
      }
    }
  },

  {
    files: ['src/**/*.{test,spec}.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
]
