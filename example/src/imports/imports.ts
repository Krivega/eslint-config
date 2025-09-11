import fs from 'node:fs';
import path from 'node:path';

import { Message } from '@/components';
import { Button } from '../components/Button';
import logger from '../logger';
import './auto';

import type { TMessageProps } from '@/components';
import type { TButtonProps } from '../components/Button';

const buttonProps: TButtonProps = {
  title: 'test',
};

Button(buttonProps);

const messageProps: TMessageProps = {
  message: 'test',
};

Message(messageProps);

const source = path.join(import.meta.dirname, 'test.txt');

logger('🚀 temp  ~ imports.ts:23 ~ src:', source);

fs.readFileSync(source, 'utf8');
