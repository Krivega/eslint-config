import config from '../index';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    extends: [config],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir:
          import.meta && typeof import.meta.url === 'string' ? undefined : process.cwd(),
      },
    },
  },
]);
