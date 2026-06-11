import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', '.vite', 'legacy', 'node_modules', 'public']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        // Loaded via <script> tags in index.html
        Peer: 'readonly',
        Animalese: 'readonly',
      },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    files: ['build_peerjs.js', '*.cjs'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
    },
  },
  {
    files: ['generateArticles.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
])
