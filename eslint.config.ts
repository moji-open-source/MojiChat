import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
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
      semi: ['error', 'never'],
      quotes: ['warn', 'single'],
      'no-var': 'warn',
      'prefer-const': 'error',
      'react/react-in-jsx-scope': 'off'
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
