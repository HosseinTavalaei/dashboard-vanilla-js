import js from '@eslint/js';
import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // 1. Global ignores (modern replacement for .eslintignore)
  {
    ignores: ['node_modules', 'dist', 'build', 'coverage'],
  },

  // 2. Base JS recommended rules (official ESLint v9 style)
  js.configs.recommended,

  // 3. Your project rules
  {
    files: ['**/*.{js,mjs,cjs}'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      prettier: eslintPluginPrettier,
    },

    rules: {
      // Prettier as ESLint rule (keeps formatting in ESLint pipeline)
      'prettier/prettier': 'error',
    },
  },

  // 4. MUST be last (disables conflicting formatting rules)
  eslintConfigPrettier,
]);