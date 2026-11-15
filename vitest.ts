import pluginVitest from '@vitest/eslint-plugin';
import type { Linter } from 'eslint';
import config from './index.js';

const vitestConfig: Linter.Config[] = [
  ...config,
  {
    files: ['**/*.{spec,test}.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    plugins: { vitest: pluginVitest },
    languageOptions: {
      globals: pluginVitest.environments.env.globals,
    },
    rules: {
      ...pluginVitest.configs.recommended.rules,
      // В тестах методы могут проверяться без привязки к контексту.
      '@typescript-eslint/unbound-method': 'off',
    },
  },
];

export default vitestConfig;
