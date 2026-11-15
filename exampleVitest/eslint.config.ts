import vitestConfig from '@vinteo/eslint-config/vitest';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...vitestConfig,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
