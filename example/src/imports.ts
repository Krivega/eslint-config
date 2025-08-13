import fs from 'node:fs';
import path from 'node:path';

import { Message } from '@/components';
import { Button } from './components/Button';

import type { TMessageProps } from '@/components';
import type { TButtonProps } from './components/Button';

const buttonProps: TButtonProps = {
  title: 'test',
};

Button(buttonProps);

const messageProps: TMessageProps = {
  message: 'test',
};

Message(messageProps);

const source = path.join(import.meta.dirname, 'test.txt');

// eslint-disable-next-line no-console
console.log('🚀 temp  ~ imports.ts:23 ~ src:', source);

fs.readFileSync(source, 'utf8');
