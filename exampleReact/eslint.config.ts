import jestConfig from '../jest';
import reactConfig from '../react';
import { defineConfig } from 'eslint/config';

const extendsConfig = [jestConfig, reactConfig];

export default defineConfig([
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
