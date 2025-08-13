import type { Linter } from 'eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import config from './index';

const reactConfig: Linter.Config[] = [
  ...config,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: { 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y, react: react },
    rules: {
      '@stylistic/jsx-closing-bracket-location': ['error'],
      '@stylistic/jsx-closing-tag-location': ['error'],
      '@stylistic/jsx-curly-brace-presence': [
        'error',
        {
          propElementValues: 'always',
        },
      ],
      '@stylistic/jsx-curly-newline': ['error'],
      '@stylistic/jsx-curly-spacing': ['error', 'never'],
      '@stylistic/jsx-equals-spacing': ['error'],
      '@stylistic/jsx-first-prop-new-line': ['error'],
      '@stylistic/jsx-function-call-newline': ['error', 'multiline'],
      '@stylistic/jsx-indent-props': ['error', 2],
      '@stylistic/jsx-max-props-per-line': [
        'error',
        {
          maximum: 1,
          when: 'multiline',
        },
      ],
      '@stylistic/jsx-quotes': ['error'],
      '@stylistic/jsx-tag-spacing': [
        'error',
        {
          afterOpening: 'never',
          beforeClosing: 'never',
          beforeSelfClosing: 'always',
          closingSlash: 'never',
        },
      ],
      '@stylistic/jsx-wrap-multilines': [
        'error',
        {
          arrow: 'parens-new-line',
          assignment: 'parens-new-line',
          condition: 'parens-new-line',
          declaration: 'parens-new-line',
          logical: 'parens-new-line',
          // prop: 'parens-new-line',
          propertyValue: 'parens-new-line',
          return: 'parens-new-line',
        },
      ],
      'jsx-a11y/alt-text': [
        'error',
        {
          area: [],
          elements: ['img', 'object', 'area', 'input[type="image"]'],
          img: [],
          'input[type="image"]': [],
          object: [],
        },
      ],
      'jsx-a11y/anchor-has-content': [
        'error',
        {
          components: [],
        },
      ],
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          aspects: ['noHref', 'invalidHref', 'preferButton'],
          components: ['Link'],
          specialLink: ['to'],
        },
      ],
      'jsx-a11y/aria-activedescendant-has-tabindex': ['error'],
      'jsx-a11y/aria-props': ['error'],
      'jsx-a11y/aria-proptypes': ['error'],
      'jsx-a11y/aria-role': [
        'error',
        {
          ignoreNonDOM: false,
        },
      ],
      'jsx-a11y/aria-unsupported-elements': ['error'],
      'jsx-a11y/click-events-have-key-events': ['error'],
      'jsx-a11y/control-has-associated-label': [
        'error',
        {
          controlComponents: [],
          depth: 5,
          ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
          ignoreRoles: [
            'grid',
            'listbox',
            'menu',
            'menubar',
            'radiogroup',
            'row',
            'tablist',
            'toolbar',
            'tree',
            'treegrid',
          ],
          labelAttributes: ['label'],
        },
      ],
      'jsx-a11y/heading-has-content': [
        'error',
        {
          components: [''],
        },
      ],
      'jsx-a11y/html-has-lang': ['error'],
      'jsx-a11y/iframe-has-title': ['error'],
      'jsx-a11y/img-redundant-alt': ['error'],
      'jsx-a11y/interactive-supports-focus': ['error'],
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          assert: 'both',
          controlComponents: [],
          depth: 25,
          labelAttributes: [],
          labelComponents: [],
        },
      ],
      'jsx-a11y/lang': ['error'],
      'jsx-a11y/media-has-caption': [
        'error',
        {
          audio: [],
          track: [],
          video: [],
        },
      ],
      'jsx-a11y/mouse-events-have-key-events': ['error'],
      'jsx-a11y/no-access-key': ['error'],
      'jsx-a11y/no-autofocus': [
        'error',
        {
          ignoreNonDOM: true,
        },
      ],
      'jsx-a11y/no-distracting-elements': [
        'error',
        {
          elements: ['marquee', 'blink'],
        },
      ],
      'jsx-a11y/no-interactive-element-to-noninteractive-role': [
        'error',
        {
          tr: ['none', 'presentation'],
        },
      ],
      'jsx-a11y/no-noninteractive-element-interactions': [
        'error',
        {
          handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
        },
      ],
      'jsx-a11y/no-noninteractive-element-to-interactive-role': [
        'error',
        {
          li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
          ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          table: ['grid'],
          td: ['gridcell'],
          ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        },
      ],
      'jsx-a11y/no-noninteractive-tabindex': [
        'error',
        {
          roles: ['tabpanel'],
          tags: [],
        },
      ],
      'jsx-a11y/no-redundant-roles': ['error'],
      'jsx-a11y/no-static-element-interactions': [
        'error',
        {
          handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
        },
      ],
      'jsx-a11y/role-has-required-aria-props': ['error'],
      'jsx-a11y/role-supports-aria-props': ['error'],
      'jsx-a11y/scope': ['error'],
      'jsx-a11y/tabindex-no-positive': ['error'],
      'jsx-quotes': ['error', 'prefer-double'],
      'react-hooks/exhaustive-deps': [
        'error',
        {
          enableDangerousAutofixThisMayCauseInfiniteLoops: false,
        },
      ],
      'react-hooks/rules-of-hooks': ['error'],
      'react/button-has-type': [
        2,
        {
          button: true,
          reset: false,
          submit: true,
        },
      ],
      'react/checked-requires-onchange-or-readonly': [2],
      'react/default-props-match-prop-types': [
        2,
        {
          allowRequiredDefaults: false,
        },
      ],
      'react/destructuring-assignment': [2, 'always'],
      'react/display-name': [
        2,
        {
          ignoreTranspilerName: false,
        },
      ],
      'react/forbid-component-props': [
        2,
        {
          forbid: [],
        },
      ],
      'react/forbid-dom-props': [
        2,
        {
          forbid: [],
        },
      ],
      'react/forbid-elements': [
        2,
        {
          forbid: [],
        },
      ],
      'react/forbid-foreign-prop-types': [
        2,
        {
          allowInPropTypes: true,
        },
      ],
      'react/forward-ref-uses-ref': [2],
      'react/hook-use-state': [2],
      'react/iframe-missing-sandbox': [2],
      'react/jsx-boolean-value': [
        2,
        'never',
        {
          always: [],
        },
      ],
      'react/jsx-closing-bracket-location': [2, 'line-aligned'],
      'react/jsx-closing-tag-location': [2],
      'react/jsx-curly-brace-presence': [
        2,
        {
          children: 'never',
          props: 'never',
        },
      ],
      'react/jsx-curly-newline': [
        2,
        {
          multiline: 'consistent',
          singleline: 'consistent',
        },
      ],
      'react/jsx-curly-spacing': [
        2,
        'never',
        {
          allowMultiline: true,
        },
      ],
      'react/jsx-equals-spacing': [2, 'never'],
      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
      'react/jsx-fragments': [2, 'syntax'],
      'react/jsx-handler-names': [
        2,
        {
          eventHandlerPrefix: 'handle',
          eventHandlerPropPrefix: 'on',
        },
      ],
      'react/jsx-indent': [2, 2],
      'react/jsx-indent-props': [2, 2],
      'react/jsx-max-depth': [2],
      'react/jsx-max-props-per-line': [
        2,
        {
          maximum: 1,
          when: 'multiline',
        },
      ],
      'react/jsx-newline': [2],
      'react/jsx-no-comment-textnodes': [2],
      'react/jsx-no-duplicate-props': [
        2,
        {
          ignoreCase: true,
        },
      ],
      'react/jsx-no-leaked-render': [2],
      'react/jsx-no-target-blank': [
        2,
        {
          enforceDynamicLinks: 'always',
          forms: false,
          links: true,
        },
      ],
      'react/jsx-no-undef': [2],
      'react/jsx-no-useless-fragment': ['error'],
      'react/jsx-pascal-case': [
        2,
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      'react/jsx-props-no-multi-spaces': [2],
      'react/jsx-props-no-spread-multi': [2],
      'react/jsx-props-no-spreading': [
        'error',
        {
          custom: 'enforce',
          exceptions: [],
          explicitSpread: 'ignore',
          html: 'enforce',
        },
      ],
      'react/jsx-tag-spacing': [
        2,
        {
          afterOpening: 'never',
          beforeClosing: 'never',
          beforeSelfClosing: 'always',
          closingSlash: 'never',
        },
      ],
      'react/jsx-uses-vars': [2],
      'react/no-access-state-in-setstate': [2],
      'react/no-adjacent-inline-elements': [2],
      'react/no-array-index-key': [2],
      'react/no-arrow-function-lifecycle': [2],
      'react/no-children-prop': [2],
      'react/no-danger': [2],
      'react/no-danger-with-children': [2],
      'react/no-deprecated': [2],
      'react/no-did-mount-set-state': [2],
      'react/no-did-update-set-state': [2],
      'react/no-direct-mutation-state': [2],
      'react/no-find-dom-node': [2],
      'react/no-invalid-html-attribute': [2],
      'react/no-is-mounted': [2],
      'react/no-multi-comp': [2],
      'react/no-namespace': [2],
      'react/no-object-type-as-default-prop': [2],
      'react/no-redundant-should-component-update': [2],
      'react/no-render-return-value': [2],
      'react/no-string-refs': [2],
      'react/no-this-in-sfc': [2],
      'react/no-typos': [2],
      'react/no-unescaped-entities': [2],
      'react/no-unknown-property': [2],
      'react/no-unsafe': [2],
      'react/no-unused-class-component-methods': [2],
      'react/no-unused-prop-types': [
        2,
        {
          customValidators: [],
          skipShapeProps: true,
        },
      ],
      'react/no-unused-state': [2],
      'react/no-will-update-set-state': [2],
      'react/prefer-es6-class': [2, 'always'],
      'react/prefer-exact-props': [2],
      'react/require-optimization': [
        2,
        {
          allowDecorators: [],
        },
      ],
      'react/require-render-return': [2],
      'react/self-closing-comp': [2],
      'react/sort-comp': [
        2,
        {
          groups: {
            lifecycle: [
              'displayName',
              'propTypes',
              'contextTypes',
              'childContextTypes',
              'mixins',
              'statics',
              'defaultProps',
              'constructor',
              'getDefaultProps',
              'getInitialState',
              'state',
              'getChildContext',
              'getDerivedStateFromProps',
              'componentWillMount',
              'UNSAFE_componentWillMount',
              'componentDidMount',
              'componentWillReceiveProps',
              'UNSAFE_componentWillReceiveProps',
              'shouldComponentUpdate',
              'componentWillUpdate',
              'UNSAFE_componentWillUpdate',
              'getSnapshotBeforeUpdate',
              'componentDidUpdate',
              'componentDidCatch',
              'componentWillUnmount',
            ],
            rendering: ['/^render.+$/', 'render'],
          },
          order: [
            'static-variables',
            'static-methods',
            'instance-variables',
            'lifecycle',
            '/^handle.+$/',
            '/^on.+$/',
            'getters',
            'setters',
            '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
            'instance-methods',
            'everything-else',
            'rendering',
          ],
        },
      ],
      'react/sort-default-props': [2],
      'react/sort-prop-types': [
        2,
        {
          callbacksLast: false,
          ignoreCase: true,
          requiredFirst: false,
          sortShapeProp: true,
        },
      ],
      'react/static-property-placement': [2, 'property assignment'],
      'react/style-prop-object': [2],
      'react/void-dom-elements-no-children': [2],

      'react/boolean-prop-naming': [
        'error',
        {
          validateNested: true,
        },
      ],
      'react/no-unstable-nested-components': 'error',
      'react/jsx-key': 'error',
      'react/jsx-no-bind': [
        'error',
        {
          ignoreRefs: false,
          allowArrowFunctions: true,
          allowFunctions: true,
          allowBind: false,
          ignoreDOMComponents: false,
        },
      ],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: false,
        },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-script-url': 'error',
      'arrow-body-style': ['error', 'always'],
    },
  },
];

export default reactConfig;
