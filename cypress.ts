import type { Linter } from 'eslint';
import pluginCypress from 'eslint-plugin-cypress';
import config from './index';

const cypressConfig: Linter.Config[] = [
  ...config,
  pluginCypress.configs.recommended
];

export default cypressConfig;
