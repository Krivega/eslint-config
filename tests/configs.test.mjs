import assert from 'node:assert/strict';
import { test } from 'node:test';

import config from '@vinteo/eslint-config';
import jestConfig from '@vinteo/eslint-config/jest';
import reactConfig from '@vinteo/eslint-config/react';
import vitestConfig from '@vinteo/eslint-config/vitest';
import { ESLint } from 'eslint';

const createESLint = (configuration) => {
  return new ESLint({ overrideConfigFile: true, overrideConfig: configuration });
};

const runners = [
  { name: 'jest', configuration: jestConfig, mock: 'jest', otherMock: 'vi', otherRunner: 'vitest' },
  {
    name: 'vitest',
    configuration: vitestConfig,
    mock: 'vi',
    otherMock: 'jest',
    otherRunner: 'jest',
  },
];

test('base and React configurations remain independent of test runners', async () => {
  for (const configuration of [config, reactConfig]) {
    const eslint = createESLint(configuration);
    const result = await eslint.calculateConfigForFile('src/sum.test.ts');

    assert.equal(result.plugins.jest, undefined);
    assert.equal(result.plugins.vitest, undefined);
    assert.equal(result.languageOptions.globals.jest, undefined);
    assert.equal(result.languageOptions.globals.vi, undefined);
    assert.equal(result.languageOptions.globals.describe, undefined);
    assert.equal(result.rules['@typescript-eslint/unbound-method'][0], 2);
  }
});

for (const { name, configuration, mock, otherMock, otherRunner } of runners) {
  test(`${name} covers test filenames and __tests__ without enabling the other runner`, async () => {
    const eslint = createESLint(configuration);
    const filenames = ['test', 'spec'].flatMap((suffix) => {
      return ['js', 'jsx', 'ts', 'tsx'].map((extension) => {
        return `src/sum.${suffix}.${extension}`;
      });
    });

    filenames.push(
      ...['js', 'jsx', 'ts', 'tsx'].map((extension) => {
        return `src/__tests__/nested/sum.${extension}`;
      }),
    );

    for (const filename of filenames) {
      const result = await eslint.calculateConfigForFile(filename);

      assert.ok(result.plugins[name], filename);
      assert.equal(result.plugins[otherRunner], undefined, filename);
      assert.ok(Object.hasOwn(result.languageOptions.globals, mock), filename);
      assert.equal(result.languageOptions.globals[otherMock], undefined, filename);
      assert.equal(result.rules[`${name}/no-focused-tests`][0], 2, filename);
      assert.equal(result.rules['@typescript-eslint/unbound-method'][0], 0, filename);
    }

    for (const filename of ['src/sum.ts', 'src/__tests-utils__/helpers.ts', 'vitest.config.ts']) {
      const result = await eslint.calculateConfigForFile(filename);

      assert.equal(result.plugins[name], undefined, filename);
      assert.equal(result.languageOptions.globals[mock], undefined, filename);
      assert.equal(result.languageOptions.globals.describe, undefined, filename);
      assert.equal(result.rules['@typescript-eslint/unbound-method'][0], 2, filename);
    }
  });

  test(`${name} accepts its APIs and reports focused tests and invalid expectations`, async () => {
    const testConfiguration = configuration.at(-1);
    const eslint = createESLint([
      testConfiguration,
      {
        // Версия нужна только для проверки правил Jest без установки самого Jest.
        settings: { jest: { version: 30 } },
        rules: { 'no-undef': 'error' },
      },
    ]);
    const lint = async (source) => {
      const [result] = await eslint.lintText(source, { filePath: 'src/sum.test.js' });

      return result.messages;
    };

    assert.deepEqual(
      await lint(
        `test('mock', () => { const add = ${mock}.fn(); add(1); expect(add).toHaveBeenCalledWith(1); });`,
      ),
      [],
    );

    for (const [source, rule] of [
      ["test.only('focused', () => { expect(1).toBe(1); });", 'no-focused-tests'],
      ["test('invalid', () => { expect(1); });", 'valid-expect'],
      ["test('missing assertion', () => {});", 'expect-expect'],
    ]) {
      const messages = await lint(source);

      assert.ok(
        messages.some((message) => {
          return message.ruleId === `${name}/${rule}`;
        }),
        rule,
      );
    }

    const messages = await lint(
      `test('wrong runner', () => { expect(${otherMock}.fn()).toBeDefined(); });`,
    );

    assert.ok(
      messages.some((message) => {
        return message.ruleId === 'no-undef';
      }),
    );
  });
}
