import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import { defineConfig } from 'eslint/config';

import jestConfig from '../jest';
import reactConfig from '../react';


const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));
const extendsConfig = [jestConfig, reactConfig];

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    extends: extendsConfig,
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir:
          import.meta && typeof import.meta.url === 'string' ? undefined : process.cwd(),
      },
    },
  },
]);
