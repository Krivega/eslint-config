import { includeIgnoreFile } from '@eslint/compat';
import { defineConfig } from 'eslint/config';
import { fileURLToPath } from 'node:url';
import config from '../index';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    extends: [config],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: './',
      },
    },
  },
]);
