# Eslint config

## Описание

`Eslint config` содержит модули, позволяющие применят правила `krivega` `eslint` для проектов, использующих `typescript`, `react` и тестовые фреймворки `jest` и `cypress`

- [`@krivega/eslint-config`](#@krivega/eslint-config)
- [`@krivega/eslint-config/react`](#@krivega/eslint-config/react)
- [`@krivega/eslint-config/jest`](#@krivega/eslint-config/jest)
- [`@krivega/eslint-config/cypress`](#@krivega/eslint-config/cypress)

## Установка

Для установки модуля `@krivega/eslint-config` выполните следующую команду в директории вашего проекта:

`npm`

```bash
npm install @krivega/eslint-config --save-dev
```

`yarn`

```bash
yarn add @krivega/eslint-config --dev
```

## Использование

#### <a name="@krivega/eslint-config"></a> `@krivega/eslint-config`

Необходимо расширить правила `@krivega/eslint-config` в корневом файле `.eslintrc.json`

```json
{
  "extends": ["@krivega/eslint-config"]
}
```

#### <a name="@krivega/eslint-config/react"></a> `@krivega/eslint-config/react`

Необходимо расширить правила `@krivega/eslint-config/react` в корневом файле `.eslintrc.json`

```json
{
  "extends": ["@krivega/eslint-config/react"]
}
```

#### <a name="@krivega/eslint-config/jest"></a> `@krivega/eslint-config/jest`

Необходимо расширить правила `@krivega/eslint-config/jest` в корневом файле `.eslintrc.json`. Пример для проекта на `react`

```json
{
  "extends": ["@krivega/eslint-config/jest", "@krivega/eslint-config/react"]
}
```

#### <a name="@krivega/eslint-config/cypress"></a> `@krivega/eslint-config/cypress`

Необходимо расширить правила `@krivega/eslint-config/cypress` в корневом файле интеграционных тестов. Например: `cypress/.eslintrc.json`

```json
{
  "extends": ["@krivega/eslint-config/cypress"]
}
```

## Важно: TypeScript type-aware правила

Некоторые правила `@typescript-eslint/*` требуют типовой информации и будут работать корректно только при указании `parserOptions.project` (и при необходимости `tsconfigRootDir`).

- Рекомендуется добавить в вашу конфигурацию ESLint:

```ts
// eslint.config.{js,ts} (Flat config)
import config from '@krivega/eslint-config';

export default [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir:
          import.meta && typeof import.meta.url === 'string' ? undefined : process.cwd(),
      },
    },
  },
];
```

```json
// .eslintrc.json (legacy формат)
{
  "extends": ["@krivega/eslint-config"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Без этих настроек часть правил, зависящих от типов, может быть автоматически отключена или выдавать предупреждения о необходимости parserServices.
