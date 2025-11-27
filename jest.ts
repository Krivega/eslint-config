import type { Linter } from 'eslint';
import pluginJest from 'eslint-plugin-jest';
import config from './index.js';

const jestConfig: Linter.Config[] = [
  ...config,
  {
    files: ['**/*.spec.js', '**/*.test.js', '**/__tests__/**/*.ts', '**/__tests__/**/*.tsx'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
      // Отключаем unbound-method для тестовых файлов, так как в тестах часто нужно
      // проверять, что методы были вызваны без привязки к контексту
      '@typescript-eslint/unbound-method': 'off',
    },
  },
];

export default jestConfig;
